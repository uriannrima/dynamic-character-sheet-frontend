const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/:id', app.controllers.feat.get);
    router.get('/', app.controllers.feat.getAll);
    router.post('/', app.controllers.feat.saveOrUpdate);
    router.put('/', app.controllers.feat.saveOrUpdate);

    app.use('/api/feat', router);
}
