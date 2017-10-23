const SpellSchoolModule = require('modules/spell-school.module');

module.exports = function (app) {
    var service = {};

    service.getAll = function (callback) {
        var collection = app.mongodb.database.collection('spellSchools');
        collection.find({}).sort({ title: 1 }).toArray(function (err, records) {
            if (err) throw err;
            callback(records.map(data => new SpellSchoolModule.SpellSchool(data)));
        });
    }

    app.createService('spellSchools', service);
}
