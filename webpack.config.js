const webpack = require('webpack');
const path = require('path');

const generatePlugins = (isProd) => {
    return [
        new webpack.optimize.UglifyJsPlugin({
            beautify: !isProd,
            mangle: !isProd ? false : {
                except: ['Collection', 'Member', 'File'],
                screw_ie8: true,
                keep_fnames: true
            },
            compress: !isProd ? false : {
                screw_ie8: true
            },
            comments: false,
            sourceMap: isProd
        })
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
