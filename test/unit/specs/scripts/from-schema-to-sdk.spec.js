import { SDKGenerator } from "@scripts/from-schema-to-sdk";
import fullSchema from "./fixtures/full-schema.json";
import { simplified3DSecureSchema } from "./fixtures/simplified-3D-secure-schema";

// We could also use an x-data in openApi but I prefer to have the definition closer to the place where it is generated to avoid delay/complexity
const customFunctionNames = {
  "/authentication-tokens/{token}/exchange": "exchangeToken",
  "/authentication-tokens": "login",
};

it.skip("generates proper resources", async () => {
  const processedResources = new SDKGenerator(
    simplified3DSecureSchema
  ).processSchema();
  jestExpect(processedResources["three-d-secure-resource.js"])
    .toMatchInlineSnapshot(`
    "export default function ThreeDSecureResource({ apiHandler }) {
      return {
        getAll({ limit = null, offset = null } = {}) {
          const params = {
            limit,
            offset,
          };
          return apiHandler.getAll('3dsecure', params);
        },
        create({ data }) {
          return apiHandler.post('3dsecure', data);
        },
        get({ id }) {
          return apiHandler.get('3dsecure/' + id);
        },
      };
    }
    "
  `);
});

it.only("generates all resources", async () => {
  const processedResources = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).processSchema();
  jestExpect(Object.keys(processedResources)).toMatchInlineSnapshot(`
    Array [
      "authentication-tokens-resource.js",
    ]
  `);
});

it("generates all functions for one resource", async () => {
  const customResourceName = {
    authentication: "customer-authentication",
  };

  const authFunctions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generateResourceFunctions("authentication-tokens");

  console.log(authFunctions);
});

it("generates one function for path with dynamic parameter", async () => {
  const pathFunctions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions(
    "authentication-tokens",
    "/authentication-tokens/{token}/exchange"
  );

  jestExpect(pathFunctions).toMatchInlineSnapshot(`
    Array [
      "exchangeToken({token, data}) {
                return apiHandler.post(\`/authentication-tokens/\${token}/exchange\`, data);
            }",
    ]
  `);
});

it("generates one function for path with 2 dynamic parameters", async () => {
  const customFunctionNames = {};

  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions("custom-fields", "/custom-fields/{resource}/{name}");

  jestExpect(functions).toMatchInlineSnapshot(`
    Array [
      "get({resource,name,}) {
                return apiHandler.get(\`/custom-fields/\${resource}/{name}\`);
            }",
    ]
  `);
});
