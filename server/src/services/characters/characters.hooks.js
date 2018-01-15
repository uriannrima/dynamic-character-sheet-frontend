const { authenticate } = require('feathers-authentication').hooks;

var debugHook = function(hook){
  console.log('test');
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [debugHook],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
