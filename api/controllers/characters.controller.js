var ObjectId = require('mongodb').ObjectID;

module.exports = function (app) {
    var controller = {};

    controller.get = function (req, res) {
        const _id = new ObjectId(req.params.id);
        var collection = app.mongodb.database.collection('characters');
        collection.find({ _id }).toArray(function (err, records) {
            res.json(records[0]);
        });
    };

    controller.save = function (req, res) {
        var character = req.body.character;
        var collection = app.mongodb.database.collection('characters');
        collection.insert(character, function (err, records) {
            res.json(records.ops[0]);
        });
    };

    controller.update = function (req, res) {
        var character = req.body.character;
        const _id = new ObjectId(character._id);
        delete character._id;
        var collection = app.mongodb.database.collection('characters');
        collection.findAndModify({ _id }, [], { $set: character }, { new: true }, function (err, doc) {
            res.json(doc.value);
        });
        // collection.update({ _id: new ObjectId(character._id) }, character, function (err, records) {
        //     res.json(character);
        // });
    }
    app.controllers = app.controller || {};
    app.controllers.characters = controller;
}