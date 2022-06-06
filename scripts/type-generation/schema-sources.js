const axios = require('axios');
const fs = require('fs');
const resolve = require('path').resolve;

function getOnlineSchemas() {
  console.log('⬇️  Downloading json schemas from redoc.ly registry [main]');

  return Promise.all([
    axios.get(
      'https://api.redoc.ly/registry/rebilly/core-api/core/bundle/main/openapi.json'
    ),
    axios.get(
      'https://api.redoc.ly/registry/rebilly/storefront/storefront/bundle/main/openapi.json'
    ),
    axios.get(
      'https://api.redoc.ly/registry/rebilly/users/users/bundle/main/openapi.json'
    ),
    axios.get(
      'https://api.redoc.ly/registry/rebilly/reports/reports/bundle/main/openapi.json'
    ),
  ]).then((response) => {
    const [coreResponse, storefrontResponse, usersResponse, reportsResponse] = response;
    return {
      coreSchema: coreResponse.data,
      storefrontSchema: storefrontResponse.data,
      usersSchema: usersResponse.data,
      reportsSchema: reportsResponse.data,
    };
  });
}

function readLocalSchemas() {
  const schemaPath = resolve('../api-definitions/dist');
  console.log(
    `📂  Reading json schemas from api-definitions in [${schemaPath}]`
  );

  const readSchema = (filename) =>
    JSON.parse(fs.readFileSync(schemaPath + '/' + filename).toString());

  return Promise.resolve({
    coreSchema: readSchema('core.json'),
    usersSchema: readSchema('users.json'),
    storefrontSchema: readSchema('storefront.json'),
    reportsSchema: readSchema('reports.json'),
  });
}

module.exports = { getOnlineSchemas, readLocalSchemas };
