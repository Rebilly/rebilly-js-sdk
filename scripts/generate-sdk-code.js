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
              resourceContent[filename]
              fs.writeFile('testing-resources/' + filename, resourceContent[filename], 'utf8');
       })
}