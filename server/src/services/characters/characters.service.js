// Initializes the `characters` service on path `/characters`
const createService = require('feathers-mongodb');
const hooks = require('./characters.hooks');
const filters = require('./characters.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/characters', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('characters');

  mongoClient.then(db => {
    service.Model = db.collection('characters');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
