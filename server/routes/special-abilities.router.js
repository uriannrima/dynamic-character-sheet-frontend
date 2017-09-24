const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    
    router.get('/:id', app.controllers.specialAbilities.get);
    router.get('/', app.controllers.specialAbilities.getAll);
    router.post('/', app.controllers.specialAbilities.saveOrUpdate);
    router.put('/', app.controllers.specialAbilities.saveOrUpdate);

    app.use('/api/specialAbilities', router);
}