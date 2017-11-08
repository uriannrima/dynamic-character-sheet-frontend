const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/', app.controllers.spellSchool.getAll);

    app.use('/api/spellSchool', router);
}
