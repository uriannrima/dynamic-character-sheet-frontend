process.env.NODE_ENV = 'development';

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../public'),
        publicPath: '/',
        devtoolModuleFilenameTemplate: info => {
            if (info.resource.match(/\.vue$/)) {
                $filename = info.allLoaders.match(/type=script/)
                    ? info.resourcePath : 'generated';
            } else {
                $filename = info.resourcePath;
            }
            return $filename;
        }
    },
    devtool: "#inline-source-map",
    resolve: {
        alias: {
            'Constants$': path.resolve(__dirname, '../src/constants.dev.js'),
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: "Web Dynamic Charactersheet - Development",
            template: "index.html"
        })
    ]
});