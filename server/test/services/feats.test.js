const assert = require('assert');
const app = require('../../src/app');

describe('\'feats\' service', () => {
  it('registered the service', () => {
    const service = app.service('feats');

    assert.ok(service, 'Registered the service');
  });
});
