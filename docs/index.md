# Rebilly JS SDK Library
The Rebilly JS SDK library allows you to consume the Rebilly API using either Node or the browser.

[![npm](https://img.shields.io/npm/v/rebilly-js-sdk.svg)](https://www.npmjs.com/package/rebilly-js-sdk)
[![Build Status](https://travis-ci.org/Rebilly/rebilly-js-sdk.svg?branch=master)](https://travis-ci.org/Rebilly/rebilly-js-sdk)
[![dependencies Status](https://david-dm.org/Rebilly/rebilly-js-sdk/status.svg)](https://david-dm.org/Rebilly/rebilly-js-sdk)
[![devDependencies Status](https://david-dm.org/Rebilly/rebilly-js-sdk/dev-status.svg)](https://david-dm.org/Rebilly/rebilly-js-sdk?type=dev)
[![Try rebilly-js-sdk on RunKit](https://badge.runkitcdn.com/rebilly-js-sdk.svg)](https://npm.runkit.com/rebilly-js-sdk)

### PCI Compliance Note
If you need to handle raw payment card data, you should use the [Rebilly Token library](https://help.rebilly.com/20221-development/rebillyjs) to generate tokens for your server-side logic.

### Rebilly API Spec
The library is a semantic representation of the [Rebilly API spec](https://rebilly.github.io/RebillyAPI/). A secondary [experimental API spec for reports](https://rebilly.github.io/RebillyReportsAPI/) is also available.

## Quick Start

Install the latest version of the SDK with [Yarn](https://yarnpkg.com/en/):
```
yarn add rebilly-js-sdk
```

Or using NPM:
```
npm install rebilly-js-sdk --save
```

Then import the library into your project:
```js
import RebillyAPI from 'rebilly-js-sdk';
```

## Semver
The JS SDK is released following [Semver 2.0.0](http://semver.org/) guidelines. Each minor and patch version will be backward-compatible and incompatible changes will be introduced using major releases only.
