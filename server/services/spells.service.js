const path = require('path');
var ObjectID = require('mongodb').ObjectID;
var spellModule = require('Modules/spell.module');

module.exports = function (app) {
    var service = {};

    service.getById = function (_id, callback) {
        var collection = app.mongodb.database.collection('spells');
        collection.find({ _id: new ObjectID(_id) }).toArray(function (err, records) {
            callback(new spellModule.spell(records[0]));
        });
    };

    service.getAll = function (callback) {
        var collection = app.mongodb.database.collection('spells');
        collection.find({ }).sort({ title : 1 }).toArray(function (err, records) {
            callback(records.map(data => new spellModule.spell(data)));
        });
    }

    service.saveOrUpdate = function (spell, callback) {
        const _id = new ObjectID(spell._id);
        delete spell._id;
        var collection = app.mongodb.database.collection('spells');
        collection.findAndModify({ _id }, [], { $set: spell }, { new: true, upsert: true }, function (err, doc) {
            callback(doc.value);
        });
    };

    app.createService('spells', service);
}