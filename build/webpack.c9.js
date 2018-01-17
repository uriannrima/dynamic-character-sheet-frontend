const path = require('path');
const merge = require('webpack-merge');
const dev = require('./webpack.dev.js');

module.exports = merge(dev, {
    resolve: {
        alias: {
            'Constants$': path.resolve(__dirname, '../src/constants.c9.js')
        }
    }
});
