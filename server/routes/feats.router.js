const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    
    router.get('/:id', app.controllers.feats.get);
    router.get('/', app.controllers.feats.getAll);
    router.post('/', app.controllers.feats.save);
    router.put('/', app.controllers.feats.update);

    app.use('/api/feats', router);
}