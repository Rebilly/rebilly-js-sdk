const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const generatePlugins = (isProd) => {
    return [
        new UglifyJsPlugin({
            sourceMap: isProd,
            uglifyOptions: {
                beautify: !isProd,
                comments: false,
                compress: isProd,
                mangle: !isProd ? false : {
                    reserved: ['Collection', 'Member', 'File'],
                    keep_fnames: true,
                },
            },
        }),
    ];
};

module.exports = (env = {}) => {
    const isProd = env === 'prod';
    const targets = [
        {
            target: 'node',
            filename: 'rebilly-js-sdk.node.js',
        },
        {
            target: 'web',
            filename: 'rebilly-js-sdk.js',
        }
    ];
    return targets.map((entry) => {
        return {
            entry: ['./src/index.js'],
            target: entry.target,
            output: {
                path: path.resolve(__dirname, './dist'),
                filename: entry.filename,
                library: 'rebilly-js-sdk',
                libraryTarget: 'umd',
                umdNamedDefine: true
            },
            module: {
                rules: [{test: /\.js$/, use: 'babel-loader'}]
            },
            plugins: generatePlugins(isProd),
            devtool: 'source-map',
        }
    });
};
