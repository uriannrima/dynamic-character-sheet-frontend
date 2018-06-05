// vue.config.js
const path = require('path')
const argv = require('optimist').argv

function resolve(dir) {
  return path.join(__dirname, dir)
}

function getConstantsPath() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'src/constants.prd.js'
    default:
      var path = `src/constants.dev.js`
      if (argv['constants']) path = `src/constants.${argv['constants']}.js`
      console.log('Constants Path', path)
      return path
  }
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
        'Constants$': resolve(getConstantsPath())
      }
    }
  }
}

module.exports = {
  configureWebpack: config => {
    return createCustomMergeConfig()
  }
}
