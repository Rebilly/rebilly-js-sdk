const fs = require('fs').promises;
const { generateSDKCodeFromSchema, generateSDKFromSchemaStorefront } = require('./from-schema-to-sdk');

console.log('📇 Auto generating JS SDK code')

generateSDKCodeFromSchema().then(resources => {
       console.log('🥳 Resources generated');
       createResourcesFiles(resources);
});

// We are going to replace the existing resource files in incremental deployments in order to perform small PR reviews
// and minimize the risk
const resourcesToOverride  = ['coupons-resource.js'];

function createResourcesFiles(resourceContent) {
       console.log('💾 Saving generated code to resource files');
       Object.keys(resourceContent).forEach(filename => {
              let content = addHeaderImports(resourceContent[filename]);
              content = addAutogeneratedCodeDisclaimer(content);
              if (resourcesToOverride.includes(filename)) {
                     fs.writeFile('src/resources/' + filename, content, 'utf8');
              }
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