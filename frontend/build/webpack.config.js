const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
}