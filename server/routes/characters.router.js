const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/', app.controllers.characters.getAll);
    router.get('/:id', app.controllers.characters.get);
    router.post('/', app.controllers.characters.saveOrUpdate);
    router.put('/', app.controllers.characters.saveOrUpdate);
    router.post('/feat', app.controllers.characters.addFeat);
    router.put('/feat/:featId', app.controllers.characters.removeFeat);

    app.use('/api/characters', router);
}