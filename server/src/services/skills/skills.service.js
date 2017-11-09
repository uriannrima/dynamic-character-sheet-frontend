// Initializes the `skills` service on path `/skills`
const createService = require('feathers-mongodb');
const hooks = require('./skills.hooks');
const filters = require('./skills.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/skills', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('skills');

  mongoClient.then(db => {
    service.Model = db.collection('skills');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
