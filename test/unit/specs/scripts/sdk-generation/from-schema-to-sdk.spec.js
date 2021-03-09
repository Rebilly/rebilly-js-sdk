import {
  SDKGenerator,
  getResourceType,
  getResourceFromPath,
} from "@scripts/sdk-generation/from-schema-to-sdk";
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
      return {
        getAll({ limit = null, offset = null } = {}) {
          const params = {
            limit,
            offset,
          };
          return apiHandler.getAll(\`3dsecure\`, params);
        },
        create({ id = '', data }) {
          return apiHandler.create(\`3dsecure/\${id}\`, id, data);
        },
        get({ id }) {
          return apiHandler.get(\`3dsecure/\${id}\`);
        },
      };
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
  const authFunctions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generateResourceFunctions("/authentication-tokens");
});

it.skip("generates all functions for one storefront resource", async () => {
  const authFunctions = new SDKGenerator(
    storefrontSchema,
    customFunctionNames
  ).generateResourceFunctions("/account");

  jestExpect(authFunctions).toMatchInlineSnapshot(`
    Array [
      Object {
        "create": "create({id = ''}) {
                    
                    return apiHandler.create(\`logout/\${id}\` ,id, data );
                }",
      },
      Object {
        "create": "create({id = '',data}) {
                    
                    return apiHandler.create(\`register/\${id}\` ,id, data );
                }",
      },
    ]
  `);
});

it("generates custom named function with dynamic parameter", async () => {
  const pathFunctions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions(
    "authentication-tokens",
    "/authentication-tokens/{token}/exchange"
  );

  jestExpect(pathFunctions.exchangeToken).toMatchInlineSnapshot(`
    "exchangeToken({token,data}) { 
            return apiHandler.post(\`authentication-tokens/\${token}/exchange\` , data );
        }"
  `);
});

it("generates functions for path with 2 dynamic parameters", async () => {
  const customFunctionNames = {};

  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions("custom-fields", "/custom-fields/{resource}/{name}");

  jestExpect(functions.get).toMatchInlineSnapshot(`
    "get({resource,name}) { 
            return apiHandler.get(\`custom-fields/\${resource}/\${name}\`  );
        }"
  `);

  jestExpect(functions.update).toMatchInlineSnapshot(`
    "update({resource,name,data}) { 
            return apiHandler.put(\`custom-fields/\${resource}/\${name}\` , data );
        }"
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

  jestExpect(pathFunctions.getAll).toMatchInlineSnapshot();
});

it("generates all resource functions merging paths with different patterns (coupons and coupons-redemptions)", async () => {
  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generateResourceFunctions("/coupons");

  expect(Object.keys(functions)).to.eql([
    "getAllRedemptions",
    "redeem",
    "getRedemption",
    "cancelRedemption",
    "getAll",
    "create",
    "get",
    "update",
    "setExpiration",
  ]);
});

it("generates downloadCSV function for customers resource", async () => {
  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generateResourceFunctions("/customers");

  jestExpect(functions.downloadCSV).toMatchInlineSnapshot(`
    "downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
                    const config = {
                        params: {
                            limit,
                            offset,
                            sort,
                            expand,
                            filter,
                            q,
                            criteria
                        },
                        headers: csvHeader
                    };
                    return apiHandler.download('customers', config);
                }"
  `);
});

it("generates downloadCSV and downloadPDF for invoice resource", async () => {
  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generateResourceFunctions("/invoices");

  expect(functions.downloadCSV).to.exist;
  expect(functions.downloadPDF).to.exist;
});

it("generates create function with optional id for post operation", async () => {
  const pathFunctions = new SDKGenerator(fullSchema, {}).generatePathFunctions(
    "customers",
    "/customers"
  );
  jestExpect(pathFunctions.create).toMatchInlineSnapshot(`
    "create({id = '',data,expand = null}) {
                    const params = {expand};
                    return apiHandler.create(\`customers/\${id}\` ,id, data ,params);
                }"
  `);
});

it("generates get function with expand params", async () => {
  const pathFunctions = new SDKGenerator(fullSchema, {}).generatePathFunctions(
    "disputes",
    "/disputes/{id}"
  );
  jestExpect(pathFunctions.update).toMatchInlineSnapshot(`
    "update({id,data,expand = null}) { const params = {expand};
            return apiHandler.put(\`disputes/\${id}\` , data ,params);
        }"
  `);
});

it("generates alias functions for customers", async () => {
  const pathFunctions = new SDKGenerator(fullSchema, {}).generatePathFunctions(
    "customers",
    "/customers/{id}/lead-source"
  );
  expect(Object.keys(pathFunctions)).to.eql([
    "getLeadSource",
    "createLeadSource",
    "deleteLeadSource",
    "downloadCSV",
    "updateLeadSource",
  ]);

  jestExpect(pathFunctions.createLeadSource).toMatchInlineSnapshot(`
    "createLeadSource({id,data}) { 
            return apiHandler.put(\`customers/\${id}/lead-source\` , data );
        }"
  `);

  jestExpect(pathFunctions.updateLeadSource).toMatchInlineSnapshot(`
    "updateLeadSource({id,data}) { 
            return apiHandler.put(\`customers/\${id}/lead-source\` , data );
        }"
  `);
});

it.skip("generates alias functions for invoices", async () => {
  //TODO: this path is not in core API
  const pathFunctions = new SDKGenerator(fullSchema, {}).generatePathFunctions(
    "invoices",
    "/invoices/{id}/lead-source"
  );
  expect(Object.keys(pathFunctions)).to.eql([
    "getLeadSource",
    "createLeadSource",
    "deleteLeadSource",
    "updateLeadSource",
  ]);

  jestExpect(pathFunctions.createLeadSource).toMatchInlineSnapshot(`
    "createLeadSource({id,data}) { 
            return apiHandler.put(\`invoices/\${id}/lead-source\` , data );
        }"
  `);

  jestExpect(pathFunctions.updateLeadSource).toMatchInlineSnapshot(`
    "updateLeadSource({id,data}) { 
            return apiHandler.put(\`invoices/\${id}/lead-source\` , data );
        }"
  `);
});

it("generates expand parameter for put functions", async () => {
  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions("invoices", "/invoices/{id}");

  jestExpect(functions.update).toMatchInlineSnapshot(`
    "update({id,data,expand = null}) { const params = {expand};
            return apiHandler.put(\`invoices/\${id}\` , data ,params);
        }"
  `);
});

it("generates expand parameter for post functions", async () => {
  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions("invoices", "/invoices");

  jestExpect(functions.create).toMatchInlineSnapshot(`
    "create({id = '',data,expand = null}) {
                    const params = {expand};
                    return apiHandler.create(\`invoices/\${id}\` ,id, data ,params);
                }"
  `);
});

it("generates expand parameters when they are appear inside shared parameters (instead of inside requestBody)", async () => {
  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions("subscriptions", "/subscriptions/{id}");

  jestExpect(functions.update).toMatchInlineSnapshot(`
    "update({id,data,expand = null}) { const params = {expand};
            return apiHandler.put(\`subscriptions/\${id}\` , data ,params);
        }"
  `);

  jestExpect(functions.get).toMatchInlineSnapshot(`
    "get({id,expand = null}) { const params = {expand};
            return apiHandler.get(\`subscriptions/\${id}\`  ,params);
        }"
  `);
});

it.skip("DEBUG generates all functions for core resource", async () => {
  const functions = new SDKGenerator(
    fullSchema,
    customFunctionNames
  ).generatePathFunctions("invoices", "/invoices/{id}");
  console.log(functions.update);
});

it.skip("DEBUG generates one path functions for core resource", async () => {
  const functions = new SDKGenerator(fullSchema, {}).generatePathFunctions(
    "authentication-options",
    "/authentication-options"
  );
  console.log(functions);
});

//TODO:
//There are some special functions in create-api-handler:
// - create instead of post
// - download
// - deleteAll
// - getAll
// We must look for all those occurrences and decide how to auto-generate them

//TODO: generate proper customer-resource merge function with query string

//TODO: check InvoiceTransaction requestBody which is required and
// defines data content (transactionId and amount) in openAPI.
// is it an exception or is it the expected behaviour?? Having typed data would help
// a lot with typings
