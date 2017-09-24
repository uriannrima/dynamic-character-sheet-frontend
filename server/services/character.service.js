const path = require('path');
var ObjectID = require('mongodb').ObjectID;
var characterModule = require('modules/character.module');

module.exports = function (app) {
    var service = {};

    service.getById = function (_id, callback) {
        var collection = app.mongodb.database.collection('characters');
        collection.find({ _id: new ObjectID(_id) }).toArray(function (err, records) {
            callback(new characterModule.character(records[0]));
        });
    };

    service.saveOrUpdate = function (character, callback) {
        const _id = new ObjectID(character._id);
        delete character._id;
        var collection = app.mongodb.database.collection('characters');
        collection.findAndModify({ _id }, [], { $set: character }, { new: true, upsert: true }, function (err, doc) {
            callback(doc.value);
        });
    };

    service.addFeat = function (character, feat, callback) {
        feat._id = new ObjectID();
        character.feats.push(feat);
        service.saveOrUpdate(character, character => {
            callback(feat);
        });
    };

    service.removeFeat = function (character, featId, callback) {
        character.feats = character.feats.filter(feat => feat._id != featId);
        service.saveOrUpdate(character, character => {
            callback(character);
        });
    };

    app.createService('characters', service);
}