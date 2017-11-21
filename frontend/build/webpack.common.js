const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/main.js',
    devtool: "#cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve('./src'), path.resolve('./test')],
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    fix: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.html', '.css', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src/'),
            'Assets': path.resolve(__dirname, '../assets/'),
            'Services': path.resolve(__dirname, '../src/services/'),
            'Modules': path.resolve(__dirname, '../src/modules/'),
            'Shared': path.resolve(__dirname, '../src/shared/'),
            'Store': path.resolve(__dirname, '../src/store/'),
            'Constants$': path.resolve(__dirname, '../src/constants.js'),
            'Utils': path.resolve(__dirname, '../src/utils/'),
            'vue$': 'vue/dist/vue.js',
            'bootstrap$': 'bootstrap/dist/css/bootstrap.css',
            // 'lodash$': 'lodash/lodash.min.js',
            // 'vee-validate$': 'vee-validate/dist/vee-validate.min.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new webpack.ProvidePlugin({
            Dexie: 'Dexie'
        }),
        new CopyWebpackPlugin([
            {
                from: './assets',
                to: 'assets'
            }
        ])
    ]
}
