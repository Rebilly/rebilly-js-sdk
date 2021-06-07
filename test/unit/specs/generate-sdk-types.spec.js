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

it('Generates TS type for collection getAll', async () => {
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

it('Generates TS type for collection getAll in storefront schema', async () => {
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
