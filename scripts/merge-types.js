const { readFileSync, writeFileSync } = require('fs');
const resolve = (relativePath) =>
  require('path').resolve(process.cwd(), relativePath);

function merge() {
  console.log('🧑‍💻  Merging rebilly api types into js-sdk package types');
  const rebillyApiTypesFilename = './typings/rebilly/index.d.ts';
  const SDKTypesFilename = './typings/rebilly-js-sdk/index.d.ts';

  let data1 = readFileSync(rebillyApiTypesFilename, 'utf-8');
  let data2 = readFileSync(SDKTypesFilename, 'utf-8');

  writeFileSync(resolve('./dist/rebilly-js-sdk.d.ts'), data1 + data2, {
    flag: 'wx',
  });
}

merge();
