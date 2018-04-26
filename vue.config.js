// vue.config.js
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

function createCustomMergeConfig(config) {
  return {
    resolve: {
      alias: {
        'public': resolve('public'),
        'feathers': resolve('src/feathers'),
        'domain': resolve('src/domain'),
        'sections': resolve('src/sections'),
        'services': resolve('src/services'),
        'shared': resolve('src/shared'),
        'store': resolve('src/store'),
        'utils': resolve('src/utils'),
        'vue$': 'vue/dist/vue.esm.js',
        'Constants$': (process.env.NODE_ENV === 'production')
          ? resolve('src/constants.prd.js') : resolve('src/constants.dev.js')
      }
    }
  }
}

module.exports = {
  configureWebpack: config => {
    return createCustomMergeConfig();
  }
}
