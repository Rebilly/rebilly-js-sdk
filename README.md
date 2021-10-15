# Rebilly JS SDK library 
The Rebilly JS SDK library allows you to consume the Rebilly API using either Node or the browser.

[![npm](https://img.shields.io/npm/v/rebilly-js-sdk.svg)](https://www.npmjs.com/package/rebilly-js-sdk)
![GitHub release](https://github.com/rebilly/rebilly-js-sdk/actions/workflows/publish.yaml/badge.svg)
[![Try rebilly-js-sdk on RunKit](https://badge.runkitcdn.com/rebilly-js-sdk.svg)](https://npm.runkit.com/rebilly-js-sdk)

### PCI Compliance note
If you need to handle raw payment card data, you should use [Rebilly FramePay](https://www.rebilly.com/docs/content/dev-docs/tutorial/frame-pay-getting-started/) to generate tokens for your server-side logic.

### Rebilly API definition
This library is a semantic representation of the [Rebilly API definition](https://docs.rebilly.com/docs/developer-docs/api/overview/).

The definition includes SDK examples for each API operation, listed under *Request samples*.

## Usage

Instructions for installing and using the JS SDK can be found in the [Rebilly Docs](https://www.rebilly.com/docs/content/dev-docs/concept/sdks/)

## Development

Build development `dist` folder without sourcemap
```
npm run build:dev
```
Build release `dist` folder with sourcemap (release)
```
npm run build:prod
```
Run all unit tests
```
npm run unit
```
Watch unit tests and re-run on change
```
npm run unit:watch
```
Generate coverage report
```
npm run coverage
```
Check that the generated typescript type file is valid (note: you should build the types first, by using either `npm run ts:bundle-types-from-redocly` or `ts:bundle-types-from-local`)
```
npm run test:check-build-types
```

## Typescript types generation

Types are automatically created because `npm run ts:bundle-types-from-redocly` is called as part of `npm run build:prod`.

But if you want to test TS types before the related `api-definitions` have been merged into main, you can run:  

```bash
    npm run ts:bundle-types-from-local
```

which will build your local `api-definitions` branch to generate new TS types that can be tested in your local consumer apps.
