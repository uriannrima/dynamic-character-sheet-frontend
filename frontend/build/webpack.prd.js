process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackConfig = merge(common, {
    output: {
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].js',
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
    devtool: "#source-map",
    resolve: {
        alias: {
            'Constants$': path.resolve(__dirname, '../src/constants.prd.js'),
        }
    },
    plugins: [
        new CleanWebpackPlugin('../../public', {
            allowExternal: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: '/static/css/[name].[contenthash].css'
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new HtmlWebpackPlugin({
            title: "Web Dynamic Charactersheet - Production",
            template: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // keep module.id stable when vender modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        // keep module.id stable when vender modules does not change
        new webpack.HashedModuleIdsPlugin(),
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                ['js', 'css'].join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
            openAnalyzer: false
        })
    ]
});

module.exports = webpackConfig;