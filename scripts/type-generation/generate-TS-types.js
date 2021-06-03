const minimist = require('minimist');
const { readFileSync, writeFileSync } = require('fs');
const openapiTS = require('openapi-typescript').default;
const { getOnlineSchemas, readLocalSchemas } = require('./schema-sources');
const { generateSdkTypes } = require('./generate-sdk-types');

const schemaTypes = {
  CORE: 'core',
  USERS: 'users',
  STOREFRONT: 'storefront',
};

function generateTypesFromSchemas(schemas) {
  const coreTypes = processSchema(schemas.coreSchema, schemaTypes.CORE);

  const usersTypes = processSchema(schemas.usersSchema, schemaTypes.USERS);

  const storefrontTypes = processSchema(
    schemas.storefrontSchema,
    schemaTypes.STOREFRONT
  );

  const combinedApiTypes =
    coreTypes.openApiTypes +
    usersTypes.openApiTypes +
    storefrontTypes.openApiTypes;

  const combinedSDKTypes =
    coreTypes.sdkTypes + usersTypes.sdkTypes + storefrontTypes.sdkTypes;

  console.log(
    '🍹 Mixing openapi-typescript types and custom SDK types into the same file (/typings/rebilly/index.d.ts)'
  );
  insertOpenApiTypesIntoTemplate(combinedApiTypes, combinedSDKTypes);
}

function processSchema(openApiSchema, schemaType) {
  console.log(
    `🦊 Auto generating custom SDK types for ${schemaType.toUpperCase()} schema`
  );
  // Fixing properties like Customer-2 or Invoice-2 to avoid prettier problems
  openApiSchema = fixProperties(openApiSchema);
  // Generating rebilly backend types with openapi-typescript
  let openApiTypes = openapiTS(openApiSchema);
  // Avoid name collisions between the generated schema types
  openApiTypes = openApiTypes
    .replace(/components/g, schemaType + 'Components')
    .replace(/paths/g, schemaType + 'Paths');
  // Generating custom SDK types with custom rebilly script
  const sdkTypes = generateSdkTypes(openApiSchema);
  return { openApiTypes, sdkTypes };
}

function fixProperties(openApiSchema) {
  // Redocly is generating properties like Customer-2 or Invoice-2 that cause problems in the prettier configuration
  // Here we simple remove those - to avoid problems
  const problematicProperties = [
    'Customer',
    'Invoice',
    'Dispute',
    'Subscription',
    'GatewayAccount',
  ];
  let stringSchema = JSON.stringify(openApiSchema);
  problematicProperties.forEach((p) => {
    stringSchema = stringSchema.replace(p + '-2', p + '2');
  });
  return JSON.parse(stringSchema);
}

function insertOpenApiTypesIntoTemplate(openApiTypes, sdkTypes) {
  const templateFilename = './types-generation/template.d.ts';
  let templateData = readFileSync(templateFilename, 'utf-8');
  templateData = templateData.replace('//<open-api-types>', openApiTypes);
  templateData = templateData.replace('//<sdk-types>', sdkTypes);

  writeFileSync('./typings/rebilly/index.d.ts', templateData);
}

/**
 * We accept two command line parameters:
 * --local: indicates that schemas should be read from local api-definition files (instead of downloading them from github)
 *
 * Example: yarn ts:generate-types --local
 */
const argv = minimist(process.argv.slice(2));
const getSchemas = argv.online ? getOnlineSchemas : readLocalSchemas;

getSchemas().then((schemas) => {
  generateTypesFromSchemas(schemas);
});
