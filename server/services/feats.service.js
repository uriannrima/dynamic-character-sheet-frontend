const path = require('path');
var ObjectID = require('mongodb').ObjectID;
var featModule = require('Modules/feat.module');

module.exports = function (app) {
    var service = {};

    service.getById = function (_id, callback) {
        var collection = app.mongodb.database.collection('feats');
        collection.find({ _id: new ObjectID(_id) }).toArray(function (err, records) {
            callback(new featModule.feat(records[0]));
        });
    };

    service.getAll = function (callback) {
        var collection = app.mongodb.database.collection('feats');
        collection.find({}).sort({ title: 1 }).toArray(function (err, records) {
            callback(records.map(data => new featModule.feat(data)));
        });
    }

    service.saveOrUpdate = function (feat, callback) {
        const _id = new ObjectID(feat._id);
        delete feat._id;
        if (feat.subValue) delete feat.subValue.value;
        var collection = app.mongodb.database.collection('feats');
        collection.findAndModify({ _id }, [], { $set: feat }, { new: true, upsert: true }, function (err, doc) {
            callback(doc.value);
        });
    };

    app.createService('feats', service);
}