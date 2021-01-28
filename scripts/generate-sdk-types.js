const fs = require('fs');
const { generatedTypes } = require('./types-to-generate');

console.log('🦊 Auto generating custom SDK types')

/* GENERATES an index.d.ts file with a merge of manually defined custom types and programmatically generated types */
const customFilename = './typings/rebilly/custom.d.ts';
const indexFilename = './typings/rebilly/index.d.ts';
fs.readFile(customFilename, 'utf8', (error, data) => {
    if (error) throw error;
    // data = data.replace('AUTO-GENERATED-TYPES-HERE', generatedTypes);
    data = data.replace('//**AUTO-GENERATED-TYPES-HERE**', generatedTypes);

    fs.writeFile(indexFilename, data, 'utf8', (err) => {
        if (err) return console.log(err);
    });
});