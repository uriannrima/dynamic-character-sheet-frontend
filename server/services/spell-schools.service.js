const path = require('path');
var ObjectID = require('mongodb').ObjectID;
const SpellSchoolModule = require('modules/spell-school.module');

module.exports = function (app) {
    var service = {};
    
    service.getAll = function (callback) {
        var collection = app.mongodb.database.collection('spellSchools');
        collection.find({}).sort({ title: 1 }).toArray(function (err, records) {
            callback(records.map(data => new SpellSchoolModule.SpellSchool(data)));
        });
    }

    app.createService('spellSchools', service);
}