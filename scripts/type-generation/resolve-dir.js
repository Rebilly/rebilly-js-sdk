const path = require('path');
const resolveDir = (relativePath) => path.resolve(process.cwd(), relativePath);
module.exports = { resolveDir };
