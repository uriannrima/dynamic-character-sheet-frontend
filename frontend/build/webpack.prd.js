const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
    resolve: {
        alias: {
            'Constants$': path.resolve(__dirname, '../src/constants.prd.js'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Web Dynamic Charactersheet - Production",
            template: "index.html"
        }),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});