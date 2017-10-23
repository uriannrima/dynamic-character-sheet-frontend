const path = require('path');
const ObjectID = require('mongodb').ObjectID;
const FeatModule = require('modules/feat.module');

module.exports = function(app) {
    var service = {};

    service.getById = async function(id) {
        var collection = app.mongodb.database.collection('feats');
        try {
            return await collection.findOne({ _id: new ObjectID(id) });
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    };

    service.getAll = function(callback) {
        var collection = app.mongodb.database.collection('feats');
        collection.find({}).sort({ title: 1 }).toArray(function(err, records) {
            callback(records.map(data => new FeatModule.Feat(data)));
        });
    }

    service.saveOrUpdate = function(feat, callback) {
        const _id = new ObjectID(feat._id);
        delete feat._id;
        if (feat.subValue && feat.subValue.title) {
            delete feat.subValue.value;
        }
        else {
            delete feat.subValue;
        }
        var collection = app.mongodb.database.collection('feats');
        collection.findAndModify({ _id }, [], { $set: feat }, { new: true, upsert: true }, function(err, doc) {
            callback(doc.value);
        });
    };

    app.createService('feat', service);
}
