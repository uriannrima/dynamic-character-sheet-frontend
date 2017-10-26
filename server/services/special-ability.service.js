var ObjectID = require('mongodb').ObjectID;
const SpecialAbilityModule = require('modules/special-ability.module');

module.exports = function (app) {
    var service = {};

    service.getById = function (_id, callback) {
        var collection = app.mongodb.database.collection('specialAbilities');
        collection.find({ _id: new ObjectID(_id) }).toArray(function (err, records) {
            if (err) throw err;
            callback(new SpecialAbilityModule.SpecialAbility(records[0]));
        });
    };

    service.getAll = function (callback) {
        var collection = app.mongodb.database.collection('specialAbilities');
        collection.find({}).sort({ title: 1 }).toArray(function (err, records) {
            if (err) throw err;
            callback(records.map(data => new SpecialAbilityModule.SpecialAbility(data)));
        });
    }

    service.saveOrUpdate = function (specialAbility, callback) {
        const _id = new ObjectID(specialAbility._id);
        delete specialAbility._id;
        if (specialAbility.subValue) delete specialAbility.subValue.value;
        var collection = app.mongodb.database.collection('specialAbilities');
        collection.findAndModify({ _id }, [], { $set: specialAbility }, { new: true, upsert: true }, function (err, doc) {
            if (err) throw err;
            callback(doc.value);
        });
    };

    app.createService('specialAbility', service);
}
