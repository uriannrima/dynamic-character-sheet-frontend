const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/:id', app.controllers.specialAbility.get);
    router.get('/', app.controllers.specialAbility.getAll);
    router.post('/', app.controllers.specialAbility.saveOrUpdate);
    router.put('/', app.controllers.specialAbility.saveOrUpdate);

    app.use('/api/specialAbility', router);
}
