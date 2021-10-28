const { readFileSync, writeFileSync, mkdirSync } = require('fs');
const { resolveDir } = require('./type-generation/resolve-dir');

function merge() {
  console.log('🧑‍💻  Merging rebilly api types into js-sdk package types');
  const rebillyApiTypesFilename = './typings/rebilly/index.d.ts';
  const SDKTypesFilename = './typings/rebilly-js-sdk/rebilly-js-sdk.d.ts';

  let data1 = readFileSync(rebillyApiTypesFilename, 'utf-8');
  let data2 = readFileSync(SDKTypesFilename, 'utf-8');

  mkdirSync(resolveDir('./dist'), {recursive: true});
  writeFileSync(resolveDir('./dist/rebilly-js-sdk.d.ts'), data1 + data2);
}

merge();
