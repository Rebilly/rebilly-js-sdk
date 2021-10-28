import { ApiInstance } from './resources/api-instance';
import { ExperimentalApiInstance } from './resources/experimental/experimental-resources';
import { StorefrontApiInstance } from './resources/storefront/storefront-api-instance';

/**
 * Create an API instance using the provided API handler.
 * @returns {ApiInstance} apiInstance
 */
export default function createApiInstance({ apiHandler }) {
  return new ApiInstance({ apiHandler });
}

/**
 * Create an experimental API instance using the provided API handler.
 * @returns {ExperimentalApiInstance} experimentalApiInstance
 */
export function createExperimentalApiInstance({ apiHandler }) {
  return new ExperimentalApiInstance({ apiHandler });
}

/**
 * Create an Storefront API instance using the provided API handler.
 * @returns {StorefrontApiInstance} storefrontApiInstance
 */
export function createStorefrontApiInstance({ apiHandler }) {
  return new StorefrontApiInstance({ apiHandler });
}
