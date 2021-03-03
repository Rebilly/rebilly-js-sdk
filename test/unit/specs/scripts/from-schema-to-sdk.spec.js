import {
  SDKGenerator,
  getResourceFromPath,
  getResourceType,
} from "@scripts/from-schema-to-sdk";
import { expect } from "chai";
//We should download this file before running tests -> the fresher the copy the better
import fullSchema from "./fixtures/full-schema.json";
import storefrontSchema from "./fixtures/storefront-schema.json";
import { simplified3DSecureSchema } from "./fixtures/simplified-3D-secure-schema";
const util = require("util");
util.inspect.defaultOptions.maxArrayLength = null;

// We could also use an x-data in openApi but I prefer to have the definition closer to the place where it is generated to avoid delay/complexity
//Should we have one special for storefront???
const customFunctionNames = {
  "/authentication-tokens/{token}/exchange": "exchangeToken",
  "/authentication-tokens": "login",

  //Storefront
  "/account/password": "changePassword",
  "/account/forgot-password": "requestPasswordReset",
  "/account/reset-password/{token}": "confirmPasswordReset",
  "/account/resend-verification": "resendEmailVerification",
  "/account/verification/{token}": "verifyEmail",
};

it("generates proper resources", async () => {
  const processedResources = new SDKGenerator(
    simplified3DSecureSchema
  ).processSchema();
  jestExpect(processedResources["three-d-secure-resource.js"])
    .toMatchInlineSnapshot(`
    "export default function ThreeDSecureResource({ apiHandler }) {
      return {};
    }
    "
  `);
});

it.skip("DEBUG", async () => {
  const processedResources = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).processSchema();

  console.log(processedResources["aml-resource.js"]);
});

it("generates custom resource file names", async () => {
  // console.dir(Object.keys(fullSchema.paths).splice(200, 100));
  expect(getResourceFromPath("/3dsecure")).to.eql("three-d-secure-resource.js");
  expect(getResourceFromPath("/3dsecure/{id}")).to.eql(
    "three-d-secure-resource.js"
  );

  expect(getResourceFromPath("/attachments")).to.eql("files-resource.js");

  expect(getResourceFromPath("/authentication-options")).to.eql(
    "customer-authentication-resource.js"
  );
  expect(getResourceFromPath("/authentication-tokens")).to.eql(
    "customer-authentication-resource.js"
  );
  expect(getResourceFromPath("/authentication-tokens/{token}/exchange")).to.eql(
    "customer-authentication-resource.js"
  );

  expect(getResourceFromPath("/bank-accounts")).to.eql(
    "bank-accounts-resource.js"
  );
  expect(getResourceFromPath("/bank-accounts/{id}")).to.eql(
    "bank-accounts-resource.js"
  );
  expect(getResourceFromPath("/bank-accounts/{id}/deactivation")).to.eql(
    "bank-accounts-resource.js"
  );

  expect(getResourceFromPath("/coupons-redemptions")).to.eql(
    "coupons-resource.js"
  );
  expect(getResourceFromPath("/coupons-redemptions/{id}/cancel")).to.eql(
    "coupons-resource.js"
  );
  expect(getResourceFromPath("/coupons")).to.eql("coupons-resource.js");

  expect(getResourceFromPath("/credentials")).to.eql(
    "customer-authentication-resource.js"
  );
  expect(getResourceFromPath("/credentials/{id}")).to.eql(
    "customer-authentication-resource.js"
  );

  expect(getResourceFromPath("/customers/{id}")).to.eql(
    "customers-resource.js"
  );
  expect(getResourceFromPath("/customers/{id}/lead-source")).to.eql(
    "customers-resource.js"
  );
  expect(getResourceFromPath("/customers/{id}/timeline")).to.eql(
    "customers-resource.js"
  );
  expect(getResourceFromPath("/customers/{id}/timeline/{messageId}")).to.eql(
    "customers-resource.js"
  );

  //TODO
  expect(getResourceFromPath("/customer-timeline-custom-events")).to.eql(
    "todo-resource.js"
  );
  expect(getResourceFromPath("/customer-timeline-custom-events/{id}")).to.eql(
    "todo-resource.js"
  );

  //TODO
  expect(getResourceFromPath("/customer-timeline-events")).to.eql(
    "timelines-resource.js"
  );

  expect(getResourceFromPath("/password-tokens")).to.eql(
    "customer-authentication-resource.js"
  );
  expect(getResourceFromPath("/password-tokens/{id}")).to.eql(
    "customer-authentication-resource.js"
  );

  expect(getResourceFromPath("/permissions-emulation")).to.eql(
    "profile-resource.js"
  );

  //TODO
  expect(getResourceFromPath("/digital-wallets/validation")).to.eql(
    "todo-resource.js"
  );
  expect(getResourceFromPath("/activation")).to.eql("todo-resource.js");

  expect(
    getResourceFromPath("/email-delivery-setting-verifications/{token}")
  ).to.eql("email-delivery-settings-resource.js");
  expect(getResourceFromPath("/email-delivery-settings")).to.eql(
    "email-delivery-settings-resource.js"
  );

  expect(getResourceFromPath("/forgot-password")).to.eql("account-resource.js");

  expect(getResourceFromPath("/logout")).to.eql("account-resource.js");

  // We have reset-password in users-resource also
  expect(getResourceFromPath("/reset-password")).to.eql("account-resource.js");

  expect(getResourceFromPath("/signin")).to.eql("account-resource.js");
  expect(getResourceFromPath("/signup")).to.eql("account-resource.js");

  expect(getResourceFromPath("/customers/{customerId}/summary-metrics")).to.eql(
    "customers-resource.js"
  );

  expect(getResourceFromPath("/experimental/organizations")).to.eql(
    "todo-resource.js"
  );
});

it("generates custom resource file names for storefront", async () => {
  expect(getResourceFromPath("/login")).to.eql("authorization-resource.js");
  //TODO: find easy way to override in the context of Storefront (probably manually adding it is the simplest way for now)
  // expect(getResourceFromPath("/logout")).to.eql("authorization-resource.js");

  //TODO -> "/payment" does not appear in any resource but it does appear in storefront path
  expect(getResourceFromPath("/payment")).to.eql("payment-resource.js");
  expect(getResourceFromPath("/preview-purchase")).to.eql(
    "purchase-resource.js"
  );
  expect(getResourceFromPath("/ready-to-pay")).to.eql("purchase-resource.js");
  expect(getResourceFromPath("/register")).to.eql("account-resource.js");
});

it("generates custom experimental resource file names", async () => {
  expect(getResourceType("coupons")).to.eql("default");
  expect(getResourceType("/reports/events-triggered/{eventType}/rules")).to.eql(
    "experimental"
  );
  expect(getResourceType("/customers/{customerId}/summary-metrics")).to.eql(
    "experimental"
  );
  expect(getResourceType("/transactions/{id}/timeline")).to.eql("experimental");
  expect(getResourceType("/customers/{id}/timeline")).to.eql("experimental");
  expect(getResourceType("/histograms/transactions")).to.eql("experimental");
  expect(getResourceType("/data-exports")).to.eql("experimental");
  expect(getResourceType("/data-exports/{id}")).to.eql("experimental");
  expect(
    getResourceType("/subscriptions/{subscriptionId}/summary-metrics")
  ).to.eql("experimental");
  //TODO: location is missing from paths (do we need to manually add it??)
  //TODO: activity-feed is missing from paths (do we need to manually add it??)
  //TODO: transactions/{id}/reschedule is missing from paths (do we need to manually add it??)
  //TODO: organizations/${id} has some verbs in experimental and some verbs in default --> how do we deal with that??
  //check if we have more cases like that one and decide if it's worthy to change the design
});

it("DEBUG generate path functions", async () => {
  const debugFunctions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions("password-tokens", "/password-tokens");
  // console.log(debugFunctions)
});

it("generates all combined resources", async () => {
  const processedResources = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).processSchema();

  const resourceKeys = Object.keys(processedResources);
  expect(resourceKeys.length).to.eql(29);
  expect(resourceKeys[0]).to.eql("three-d-secure-resource.js");
  expect(resourceKeys[25]).to.eql("tags-resource.js");
  expect(resourceKeys[28]).to.eql("payouts-resource.js");
});

it("generates all storefront resources", async () => {
  const processedResources = new SDKGenerator(
    storefrontSchema,
    customFunctionNames
  ).processSchema();

  const resourceKeys = Object.keys(processedResources);
  expect(resourceKeys.length).to.eql(12);
  // expect(resourceKeys[0]).to.eql("three-d-secure-resource.js");
  expect(resourceKeys[0]).to.eql("account-resource.js");
  // expect(resourceKeys[6]).to.eql("tags-resource.js");
  expect(resourceKeys[11]).to.eql("websites-resource.js");
});

it("generates all functions for one resource with custom name", async () => {
  const customResourceName = {
    authentication: "customer-authentication",
  };

  const authFunctions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generateResourceFunctions("/authentication-tokens");
});

it("generates all functions for one storefront resource", async () => {
  const customResourceName = {};

  const authFunctions = new SDKGenerator(
    storefrontSchema,
    customFunctionNames
  ).generateResourceFunctions("/account");

  jestExpect(authFunctions).toMatchInlineSnapshot(`
    Array [
      "create({}) {
                return apiHandler.post(\`logout\` );
            }",
      "create({data}) {
                return apiHandler.post(\`register\` , data);
            }",
    ]
  `);
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
      "exchangeToken({token,data}) {
                return apiHandler.post(\`authentication-tokens/\${token}/exchange\` , data);
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
      "get({resource,name}) {
                return apiHandler.get(\`custom-fields/\${resource}/\${name}\`);
            }",
      "update({resource,name,data}) {
                return apiHandler.put(\`custom-fields/\${resource}/\${name}\` , data);
            }",
    ]
  `);
});

it.skip("generates resource function ignoring Organization-Id parameter", async () => {
  // GetPaymentCardBankNameCollection operation has organizationId as parameter
  //TODO: check which api has this definition (not in core)
  const pathFunctions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions(
    "payment-cards-bank-names",
    "/payment-cards-bank-names"
  );

  jestExpect(pathFunctions).toMatchInlineSnapshot(`
    Array [
      "getAll({limit=null,q=null} = {}) {
                const params = {
                    limit,q
                };
                return apiHandler.getAll(\`/payment-cards-bank-names\`, params);
            }",
    ]
  `);
});

it("generates all resource functions merging paths with different patterns (coupons and coupons-redemptions)", async () => {
  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generateResourceFunctions("/coupons");

  expect(functions.length).to.eql(9);
});

it.skip("DEBUG generates all functions for core resource", async () => {
  const customResourceName = {};

  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generateResourceFunctions("/custom-fields");
  console.log(functions);
});

//TODO:
//downloadCSV function inside websites resource does not follow the standard (how do we add it)
// return apiHandler.download(`websites`, config);
// Custom addons to add extra functions?? Let's wait to see how many cases
