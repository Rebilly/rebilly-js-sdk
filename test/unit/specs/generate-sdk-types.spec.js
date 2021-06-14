import { generateSdkTypes } from '@scripts/type-generation/generate-sdk-types';
import { expect } from 'chai';

const responses = {
  200: {
    content: {
      'application/json': {
        schema: {},
      },
    },
  },
  401: {},
  403: {},
};

it('Generates TS type for collection getAll response', async () => {
  const schema = {
    paths: {
      '/customers': {
        get: {
          operationId: 'GetCustomerCollection',
          responses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).to.eql(
    `type GetCustomerCollectionResponse = Promise<{ items: operations['GetCustomerCollection']['responses']['200']['content']['application/json']}>`
  );
});

it('Generates TS type for collection getAll response in storefront schema', async () => {
  const schema = {
    paths: {
      '/transactions': {
        get: {
          operationId: 'StorefrontGetTransactionCollection',
          responses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).to.eql(
    `type StorefrontGetTransactionCollectionResponse = Promise<{ items: operations['StorefrontGetTransactionCollection']['responses']['200']['content']['application/json']}>`
  );
});

it('Generates TS type for resource get response', async () => {
  const schema = {
    paths: {
      '/customers/{id}': {
        get: {
          operationId: 'GetCustomer',
          responses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).to.eql(
    `type GetCustomerResponse = Promise<{fields: operations['GetCustomer']['responses']['200']['content']['application/json']}>`
  );
});

it('Generates TS type for resource put response', async () => {
  const putResponses = {
    ...responses,
    ...{
      201: { $ref: '#/components/responses/Customer' },
    },
  };
  const schema = {
    paths: {
      '/customers/{id}': {
        put: {
          operationId: 'PutCustomer',
          responses: putResponses,
        },
      },
    },
  };

  const types = generateSdkTypes(schema).trim();
  expect(types).to.eql(
    `type PutCustomerResponse = Promise<{fields: operations['PutCustomer']['responses']['201']['content']['application/json']}>`
  );
});
