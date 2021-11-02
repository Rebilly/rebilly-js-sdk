import { generateSdkTypes } from "@scripts/type-generation/generate-sdk-types";

const responses = {
  200: {
    content: {
      "application/json": {
        schema: {},
      },
    },
  },
  401: {},
  403: {},
};

it("Generates TS types for collection getAll response", async () => {
  const schema = {
    paths: {
      "/customers": {
        get: {
          operationId: "GetCustomerCollection",
          responses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).toEqual(
    `type GetCustomerCollectionResponse = operations['GetCustomerCollection']['responses']['200']['content']['application/json'][0]
  type GetCustomerCollectionResponsePromise = Promise<{ items: {fields: GetCustomerCollectionResponse}[], getJSON: object, total?: number, offset?: number, limit?: number }>`
  );
});

it("Generates TS types for collection getAll response in storefront schema", async () => {
  const schema = {
    paths: {
      "/transactions": {
        get: {
          operationId: "StorefrontGetTransactionCollection",
          responses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).toEqual(
    `type StorefrontGetTransactionCollectionResponse = operations['StorefrontGetTransactionCollection']['responses']['200']['content']['application/json'][0]
  type StorefrontGetTransactionCollectionResponsePromise = Promise<{ items: {fields: StorefrontGetTransactionCollectionResponse}[], getJSON: object, total?: number, offset?: number, limit?: number }>`
  );
});

it("Generates TS types for resource get response", async () => {
  const schema = {
    paths: {
      "/customers/{id}": {
        get: {
          operationId: "GetCustomer",
          responses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).toMatchInlineSnapshot(`
    "type GetCustomerRequest = { id : String }

      type GetCustomerResponse = operations['GetCustomer']['responses']['200']['content']['application/json']
      type GetCustomerResponsePromise = Promise<{fields: GetCustomerResponse}>"
  `);
});

it("Generates TS types for resource put response", async () => {
  const putResponses = {
    ...responses,
    ...{
      201: { $ref: "#/components/responses/Customer" },
    },
  };
  const schema = {
    paths: {
      "/customers/{id}": {
        put: {
          operationId: "PutCustomer",
          responses: putResponses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).toEqual(
    `type PutCustomerResponse = operations['PutCustomer']['responses']['201']['content']['application/json']
  type PutCustomerResponsePromise = Promise<{fields: PutCustomerResponse}>`
  );
});

it("Generates TS types including request parameters and path parameters", async () => {
  const schema = {
    paths: {
      "/credential-hashes/plaid/{hash}": {
        get: {
          operationId: "GetPlaidCredentialCollection",
          parameters: {
            $ref: "../components/parameters/collectionFilter.yaml",
          },
          responses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).toMatchInlineSnapshot(`
    "type GetPlaidCredentialCollectionRequest = operations['GetPlaidCredentialCollection']['parameters'][\\"query\\"] & (operations['GetPlaidCredentialCollection']['parameters'] extends {path: {}} ? operations['GetPlaidCredentialCollection']['parameters'][\\"path\\"] : {}) & { hash : String }
      
      type GetPlaidCredentialCollectionResponse = operations['GetPlaidCredentialCollection']['responses']['200']['content']['application/json'][0]
      type GetPlaidCredentialCollectionResponsePromise = Promise<{ items: {fields: GetPlaidCredentialCollectionResponse}[], getJSON: object, total?: number, offset?: number, limit?: number }>"
  `);
});

it("Generates TS types for collection query with parameters in pathName (but not in schema)", async () => {
  const schema = {
    paths: {
      "/credential-hashes/oauth2/{hash}/items": {
        get: {
          operationId: "GetOauth2CredentialHashItemCollection",
          responses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).toMatchInlineSnapshot(`
    "type GetOauth2CredentialHashItemCollectionRequest = { hash : String }

      type GetOauth2CredentialHashItemCollectionResponse = operations['GetOauth2CredentialHashItemCollection']['responses']['200']['content']['application/json'][0]
      type GetOauth2CredentialHashItemCollectionResponsePromise = Promise<{ items: {fields: GetOauth2CredentialHashItemCollectionResponse}[], getJSON: object, total?: number, offset?: number, limit?: number }>"
  `);
});
