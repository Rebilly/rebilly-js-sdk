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

it('Generates TS types for collection getAll response', async () => {
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
    `type GetCustomerCollectionResponse = operations['GetCustomerCollection']['responses']['200']['content']['application/json']
  type GetCustomerCollectionResponsePromise = Promise<{ items: GetCustomerCollectionResponse}>`
  );
});

it('Generates TS types for collection getAll response in storefront schema', async () => {
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
    `type StorefrontGetTransactionCollectionResponse = operations['StorefrontGetTransactionCollection']['responses']['200']['content']['application/json']
  type StorefrontGetTransactionCollectionResponsePromise = Promise<{ items: StorefrontGetTransactionCollectionResponse}>`
  );
});

it('Generates TS types for resource get response', async () => {
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
    `type GetCustomerResponse = operations['GetCustomer']['responses']['200']['content']['application/json']
  type GetCustomerResponsePromise = Promise<{fields: GetCustomerResponse}>`
  );
});

it('Generates TS types for resource put response', async () => {
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
    `type PutCustomerResponse = operations['PutCustomer']['responses']['201']['content']['application/json']
  type PutCustomerResponsePromise = Promise<{fields: PutCustomerResponse}>`
  );
});
