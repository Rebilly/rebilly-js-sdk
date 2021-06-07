const { readFileSync, writeFileSync, mkdirSync, existsSync } = require('fs');

function merge() {
  console.log('🧑‍💻  Merging rebilly api types into js-sdk package types');
  const rebillyApiTypesFilename = './typings/rebilly/index.d.ts';
  const SDKTypesFilename = './typings/rebilly-js-sdk/index.d.ts';

  let data1 = readFileSync(rebillyApiTypesFilename, 'utf-8');
  let data2 = readFileSync(SDKTypesFilename, 'utf-8');

  if (!existsSync('./dist/')) {
    mkdirSync('./dist/');
  }

  //./dist directory should have been created by build process
  writeFileSync('./dist/rebilly-js-sdk.d.ts', data1 + data2);
}

merge();
