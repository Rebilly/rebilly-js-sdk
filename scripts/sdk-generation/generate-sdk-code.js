const fs = require('fs').promises;
const { generateSDKFromSchema, generateSDKFromSchemaStorefront } = require('./from-schema-to-sdk');

console.log('📇 Auto generating JS SDK code')

generateSDKFromSchema().then(resources => {
       console.log('🥳 Resources generated');
       createResourcesFiles(resources);
});

// generateSDKFromSchemaStorefront().then(resources => {
//        console.log('🥳 Storefront Resources generated');
//        createResourcesFiles(resources);
//        //TODO: move this inside another file
// });

function createResourcesFiles(resourceContent) {
       console.log('Saving resources to files');
       Object.keys(resourceContent).forEach(filename => {
              let content = addHeaderImports(resourceContent[filename]);
              content = addAutogeneratedCodeDisclaimer(content);
              fs.writeFile('debug-resources/' + filename, content, 'utf8');
       })
}

function addHeaderImports(content) {
       if (content.includes('pdfHeader') && content.includes('csvHeader')) {
              content = `// @ts-nocheck\nimport {pdfHeader, csvHeader} from '../request-headers';\n\n` + content;
              return content;
       }
       if (content.includes('csvHeader')) {
              content = `// @ts-nocheck\nimport {csvHeader} from '../request-headers';\n\n` + content;
              return content;
       }
       return content;
}

function addAutogeneratedCodeDisclaimer(content) {
       content = `/**
*This file was auto-generated by our auto-sdk-code-generator.
* Do not make direct changes to this file.
*/\n\n` + content;
       return content;
}