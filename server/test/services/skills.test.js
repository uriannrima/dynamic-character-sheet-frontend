const assert = require('assert');
const app = require('../../src/app');

describe('\'skills\' service', () => {
  it('registered the service', () => {
    const service = app.service('skills');

    assert.ok(service, 'Registered the service');
  });
});
