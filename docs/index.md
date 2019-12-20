# Rebilly JS SDK Library
The Rebilly JS SDK library allows you to consume the Rebilly API using either Node or the browser.

[![npm](https://img.shields.io/npm/v/rebilly-js-sdk.svg)](https://www.npmjs.com/package/rebilly-js-sdk)
[![Build Status](https://travis-ci.org/Rebilly/rebilly-js-sdk.svg?branch=master)](https://travis-ci.org/Rebilly/rebilly-js-sdk)
[![Try rebilly-js-sdk on RunKit](https://badge.runkitcdn.com/rebilly-js-sdk.svg)](https://npm.runkit.com/rebilly-js-sdk)

### PCI Compliance Note
If you need to handle raw payment card data, you should use [Rebilly FramePay](https://rebilly.github.io/framepay-docs/) to generate tokens for your server-side logic.

### Rebilly API Definition
The library is a semantic representation of the [Rebilly API spec](https://api-reference.rebilly.com/).

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
