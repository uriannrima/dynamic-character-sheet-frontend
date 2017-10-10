const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
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
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'].map(require.resolve)
                    }
                }
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
            'Modules': path.resolve(__dirname, '../../common/modules/'),
            'Shared': path.resolve(__dirname, '../src/shared/'),
            'Constants$': path.resolve(__dirname, '../src/constants.js'),
            'Utils': path.resolve(__dirname, '../src/utils/'),
            'vue$': 'vue/dist/vue.js',
            'bootstrap$': 'bootstrap/dist/css/bootstrap.css'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new CopyWebpackPlugin([
            {
                from: './assets',
                to: 'assets'
            }
        ])
    ]
}