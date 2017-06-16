const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(eot|woff2|woff|ttf|svg)$/,
                use: 'url-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.html', '.css', '.vue'],
        alias: {
            'Services': path.resolve(__dirname, '../src/services/'),
            'vue$': 'vue/dist/vue.js',
            'bootstrap$': 'bootstrap/dist/css/bootstrap.css'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
}