const path = require('path');
var ObjectId = require('mongodb').ObjectID;
var character = require('models/character.model');

module.exports = function (app) {
    var service = {};

    service.getById = function (_id, callback) {
        var collection = app.mongodb.database.collection('characters');
        collection.find({ _id: new ObjectId(_id) }).toArray(function (err, records) {
            callback(new character(records[0]));
        });
    };

    service.saveOrUpdate = function (character, callback) {
        const _id = new ObjectId(character._id);
        delete character._id;
        var collection = app.mongodb.database.collection('characters');
        collection.findAndModify({ _id }, [], { $set: character }, { new: true, upsert: true }, function (err, doc) {
            callback(doc.value);
        });
    };

    app.createService('characters', service);
}