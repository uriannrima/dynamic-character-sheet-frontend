const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    devtool: "#cheap-module-source-map",
    resolve: {
        alias: {
            'Constants$': path.resolve(__dirname, '../src/constants.dev.js'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Web Dynamic Charactersheet - Development",
            template: "index.html"
        })
    ]
});