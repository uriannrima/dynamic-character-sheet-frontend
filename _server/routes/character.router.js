const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/', app.controllers.character.getAll);

    router.get('/:id', app.controllers.character.get);
    router.post('/', app.controllers.character.saveOrUpdate);
    router.put('/:characterId', app.controllers.character.saveOrUpdate);

    router.put('/:characterId/feats/:featId', app.controllers.character.addFeat);
    router.delete('/:characterId/feats/:featId', app.controllers.character.removeFeat);

    // router.put('/:characterId/skills/:skillId', app.controllers.character.addSkill);
    // router.delete('/:characterId/skills/:skillId', app.controllers.character.removeSkill);

    app.use('/api/character', router);
}
