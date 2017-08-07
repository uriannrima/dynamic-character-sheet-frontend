const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    devtool: "#cheap-module-source-map",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../public'),
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
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(eot|woff2|woff|ttf|svg|png)$/,
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
            'Models': path.resolve(__dirname, '../../common/models/'),
            'Shared': path.resolve(__dirname, '../src/shared/'),
            'vue$': 'vue/dist/vue.js',
            'bootstrap$': 'bootstrap/dist/css/bootstrap.css'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new CopyWebpackPlugin([
            {
                from: './assets',
                to: 'assets'
            }
        ])
    ]
}