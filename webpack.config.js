var webpack = require('webpack');
var path = require('path');

module.exports = (env = {}) => {
    const isProd = env === 'prod';
    return [
        {
            entry: ['./src/index.js'],
            target: 'node',
            output: {
                path: path.resolve(__dirname, './dist'),
                filename: 'rebilly-js-sdk.node.js',
                library: 'rebilly-js-sdk',
                libraryTarget: 'umd',
                umdNamedDefine: true
            },
            module: {
                rules: [{test: /\.js$/, use: 'babel-loader'}]
            },
            plugins: [
                new webpack.optimize.UglifyJsPlugin({
                    beautify: !isProd,
                    mangle: !isProd ? false : {
                        except: ['Collection', 'Member'],
                        screw_ie8: true,
                        keep_fnames: true
                    },
                    compress: !isProd ? false : {
                        screw_ie8: true
                    },
                    comments: false,
                    sourceMap: isProd
                })
            ],
            devtool: 'source-map',
        },
        {
            entry: ['./src/index.js'],
            output: {
                path: path.resolve(__dirname, './dist'),
                filename: 'rebilly-js-sdk.js',
                library: 'rebilly-js-sdk',
                libraryTarget: 'umd',
                umdNamedDefine: true
            },
            module: {
                rules: [{test: /\.js$/, use: 'babel-loader'}]
            },
            plugins: [
                new webpack.optimize.UglifyJsPlugin({
                    beautify: !isProd,
                    mangle: !isProd ? false : {
                        except: ['Collection', 'Member'],
                        screw_ie8: true,
                        keep_fnames: true
                    },
                    compress: !isProd ? false : {
                        screw_ie8: true
                    },
                    comments: false,
                    sourceMap: isProd
                })
            ],
            devtool: 'source-map',
        }
    ];
};
