module.exports = function (app) {
    var controller = {};

    controller.getAll = function (req, res) {
        app.services.characters.getAll(characters => {
            res.json(characters);
        });
    };

    controller.get = async function ({ params: { id: characterId } }, res) {
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

    controller.addFeat = async function ({ params: { characterId, featId } }, res) {
        try {
            let feat = await app.services.characters.addFeat(characterId, featId);
            if (feat) {
                res.status(200).json(feat);
            }
            else {
                res.status(404).send('Character or Feat not found.');
            }
        }
        catch (e) {
            res.status(500).send(e);
        }
    };

    controller.removeFeat = async function ({ params: { characterId, featId } }, res) {
        try {
            let feat = await app.services.characters.removeFeat(characterId, featId);
            if (feat) {
                res.status(200).json(feat);
            }
            else {
                res.status(404).send('Character or Feat not found.');
            }
        }
        catch (e) {
            res.status(500).send(e);
        }
    };

    controller.resetSkills = function (req, res) {
        var rCharacter = req.body.character;
        app.services.characters.resetSkills(rCharacter, character => {
            res.json(character);
        });
    };

    app.createController('characters', controller);
}
