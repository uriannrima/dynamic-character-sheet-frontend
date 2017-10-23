const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/:id', app.controllers.spells.get);
    router.get('/', app.controllers.spells.getAll);
    router.post('/', app.controllers.spells.saveOrUpdate);
    router.put('/', app.controllers.spells.saveOrUpdate);

    app.use('/api/spells', router);
}
