const path = require('path');
var ObjectId = require('mongodb').ObjectID;
var feat = require('models/feat.model');

module.exports = function (app) {
    var service = {};

    service.getById = function (_id, callback) {
        var collection = app.mongodb.database.collection('feats');
        collection.find({ _id: new ObjectId(_id) }).toArray(function (err, records) {
            callback(new feat(records[0]));
        });
    };

    service.getAll = function (callback) {
        var collection = app.mongodb.database.collection('feats');
        collection.find({ }).toArray(function (err, records) {
            callback(records.map(data => new feat(data)));
        });
    }

    service.saveOrUpdate = function (feat, callback) {
        const _id = new ObjectId(feat._id);
        delete feat._id;
        var collection = app.mongodb.database.collection('feats');
        collection.findAndModify({ _id }, [], { $set: feat }, { new: true, upsert: true }, function (err, doc) {
            callback(doc.value);
        });
    };

    app.createService('feats', service);
}