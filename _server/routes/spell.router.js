const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/:id', app.controllers.spell.get);
    router.get('/', app.controllers.spell.getAll);
    router.post('/', app.controllers.spell.saveOrUpdate);
    router.put('/', app.controllers.spell.saveOrUpdate);

    app.use('/api/spell', router);
}
