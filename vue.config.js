// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

function createCustomMergeConfig(_) {
  return {
    resolve: {
      alias: {
        'public': resolve('public'),
        '@feathers': resolve('src/feathers'),
        '@domain': resolve('src/domain'),
        '@modules': resolve('src/modules'),
        '@services': resolve('src/services'),
        '@shared': resolve('src/shared'),
        '@store': resolve('src/store'),
        '@utils': resolve('src/utils'),
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}

module.exports = {
  configureWebpack: config => {
    return createCustomMergeConfig(config)
  }
}
