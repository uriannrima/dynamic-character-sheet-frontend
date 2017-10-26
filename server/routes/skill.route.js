const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/', app.controllers.skill.getAll);
    router.post('/', app.controllers.skill.saveOrUpdate);
    router.put('/', app.controllers.skill.saveOrUpdate);

    app.use('/api/skill', router);
}
