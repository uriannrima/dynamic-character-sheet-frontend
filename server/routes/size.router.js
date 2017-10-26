
const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/', app.controllers.size.getAll);

    app.use('/api/size', router);
}
