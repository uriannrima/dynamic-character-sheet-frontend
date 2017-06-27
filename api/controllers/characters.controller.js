module.exports = function (app) {
    var controller = {};

    controller.get = function (req, res) {
        var rId = req.params.id;
        app.services.characters.getById(rId, function (character) {
            res.json(character);
        });
    };

    controller.save = function (req, res) {
        var rCharacter = req.body.character;
        app.services.characters.saveOrUpdate(rCharacter, function (character) {
            res.json(character);
        });
    };

    controller.update = function (req, res) {
        var rCharacter = req.body.character;
        app.services.characters.saveOrUpdate(rCharacter, function (character) {
            res.json(character);
        });
    }
    app.controllers = app.controller || {};
    app.controllers.characters = controller;
}