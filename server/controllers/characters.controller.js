module.exports = function (app) {
    var controller = {};

    controller.getAll = function (req, res) {
        app.services.characters.getAll(characters => {
            res.json(characters);
        });
    };

    controller.get = async function ({ params : { id : characterId } }, res) {
        // Extract "id" from "params", that was extracted from "require"
        // Them "export" it as "characterId".
        var character = await app.services.characters.getById(characterId);
        res.json(character);
    };

    controller.saveOrUpdate = function (req, res) {
        var rCharacter = req.body.character;
        app.services.characters.saveOrUpdate(rCharacter, character => {
            res.json(character);
        });
    };

    controller.addFeat = function (req, res) {
        var rCharacter = req.body.character;
        var rFeat = req.body.feat;
        app.services.characters.addFeat(rCharacter, rFeat, feat => {
            res.json(feat);
        });
    };

    controller.removeFeat = function (req, res) {
        var rCharacter = req.body.character;
        var rFeatId = req.params.featId;
        app.services.characters.removeFeat(rCharacter, rFeatId, character => {
            res.json(character);
        });
    };

    controller.resetSkills = function (req, res) {
        var rCharacter = req.body.character;
        app.services.characters.resetSkills(rCharacter, character => {
            res.json(character);
        });
    };

    app.createController('characters', controller);
}