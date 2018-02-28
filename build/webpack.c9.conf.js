'use strict'
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfigPromise = require('./webpack.dev.conf');

module.exports = new Promise((resolve, reject) => {
  baseWebpackConfigPromise.then(baseWebpackConfig => {

    const devWebpackConfig = merge(baseWebpackConfig, {
      resolve: {
        alias: {
          'Constants$': path.resolve(__dirname, '../src/constants.c9.js'),
        }
      },
      devServer: {
        public: "web-dcs-uriannrima.c9users.io/sockjs-node/"
      }
    });

    resolve(devWebpackConfig);
  });


});