const fs = require('fs');
const { generateSDKTypesFromSchema } = require('./from-schema-to-sdk-types');

console.log('🦊 Auto generating custom SDK types')

/* GENERATES an index.d.ts file with a merge of manually defined custom types and programmatically generated types */
const customFilename = './typings/rebilly/custom.d.ts';
const indexFilename = './typings/rebilly/index.d.ts';
fs.readFile(customFilename, 'utf8', (error, data) => {
    if (error) throw error;
    generateSDKTypesFromSchema().then(types => {
        data = data.replace('//**AUTO-GENERATED-TYPES-HERE**', types)
        fs.writeFile(indexFilename, data, 'utf8', (err) => {
            if (err) return console.log(err);
        });
    });
});