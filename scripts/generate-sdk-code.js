const { generateSDKFromSchema } = require('./from-schema-to-sdk');

console.log('📇 Auto generating JS SDK code')

generateSDKFromSchema().then(code => {
       console.log('🥳 Resources generated')
});