
const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/', app.controllers.sizes.getAll);

    app.use('/api/sizes', router);
}
