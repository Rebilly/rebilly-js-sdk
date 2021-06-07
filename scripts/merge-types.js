const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const resolveDir = (relativePath) => path.resolve(process.cwd(), relativePath);

function merge() {
  console.log('🧑‍💻  Merging rebilly api types into js-sdk package types');
  const rebillyApiTypesFilename = './typings/rebilly/index.d.ts';
  const SDKTypesFilename = './typings/rebilly-js-sdk/index.d.ts';

  let data1 = readFileSync(rebillyApiTypesFilename, 'utf-8');
  let data2 = readFileSync(SDKTypesFilename, 'utf-8');

  //./dist directory should have been created by build process
  writeFileSync(resolveDir('./dist/rebilly-js-sdk.d.ts'), data1 + data2);
}

merge();
