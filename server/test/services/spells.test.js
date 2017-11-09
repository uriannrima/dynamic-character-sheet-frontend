const assert = require('assert');
const app = require('../../src/app');

describe('\'spells\' service', () => {
  it('registered the service', () => {
    const service = app.service('spells');

    assert.ok(service, 'Registered the service');
  });
});
