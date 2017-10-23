const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/', app.controllers.skills.getAll);
    router.post('/', app.controllers.skills.saveOrUpdate);
    router.put('/', app.controllers.skills.saveOrUpdate);

    app.use('/api/skills', router);
}
