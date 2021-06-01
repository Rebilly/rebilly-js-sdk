const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const generatePlugins = (isProd) => {
    return [
        new TerserPlugin({
            extractComments: false,
            terserOptions: {
                beautify: !isProd,
                comments: false,
                ecma: 6,
                compress: isProd,
                mangle: isProd ? false : {
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
            resolve: {
                alias: {
                    '@': path.resolve(__dirname + '/src'),
                },
            },
            plugins: generatePlugins(isProd),
            devtool: 'source-map',
            mode: isProd ? 'production' : 'development',
        }
    });
};
