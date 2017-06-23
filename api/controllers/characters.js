module.exports = function (app) {
    var controller = {};

    controller.get = function (req, res) {
        var collection = database.get().collection('characters');
        collection.find().toArray(function (err, records) {
            res.json(records);
        });
    };

    controller.save = function (req, res) {
        var collection = database.get().collection('characters');
        collection.insert(character, function (err, records) {
            res.json(records);
        });
    };

    controller.update = function (req, res) {
        var character = req.body.character;
        var collection = database.get().collection('characters');
        collection.update({ _id: character.id }, character, function (err, records) {
            res.json(records);
        });
    }

    return controller;
}