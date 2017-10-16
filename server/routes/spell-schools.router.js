const express = require('express');

module.exports = function (app) {
    var router = express.Router();
    
    router.get('/', app.controllers.spellSchools.getAll);

    app.use('/api/spellSchools', router);
}