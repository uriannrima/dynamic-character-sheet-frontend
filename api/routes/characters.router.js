const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/:id', app.controllers.characters.get);
    router.post('/', app.controllers.characters.save);
    router.put('/', app.controllers.characters.update);

    app.use('/characters', router);
}