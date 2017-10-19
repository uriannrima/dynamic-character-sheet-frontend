const express = require('express');

module.exports = function (app) {
    var router = express.Router();

    router.get('/', app.controllers.characters.getAll);
    
    router.get('/:id', app.controllers.characters.get);
    router.post('/', app.controllers.characters.saveOrUpdate);
    router.put('/:characterId', app.controllers.characters.saveOrUpdate);
    
    router.put('/:characterId/feats/:featId', app.controllers.characters.addFeat);
    router.delete('/:characterId/feats/:featId', app.controllers.characters.removeFeat);
    
    router.put('/:characterId/skills/:skillId', app.controllers.characters.addSkill);
    router.delete('/:characterId/skills/:skillId', app.controllers.characters.removeSkill);

    app.use('/api/characters', router);
}