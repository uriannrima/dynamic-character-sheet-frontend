const ObjectID = require('mongodb').ObjectID;
const SkillModule = require('modules/skill.module');

module.exports = function (app) {
    var service = {};

    service.getAll = function (callback) {
        var collection = app.mongodb.database.collection('skills');
        collection.find({}).sort({ name: 1 }).toArray(function (err, records) {
            if (err) throw err;
            var skills = records.map(record => {
                return new SkillModule.Skill(record);
            })
            callback(skills);
        });
    };

    service.saveOrUpdate = function (skill, callback) {
        const _id = new ObjectID(skill._id);

        delete skill._id;
        delete skill.classSkill;
        delete skill.hasSubValue;
        delete skill.subValue;
        delete skill.rank;
        delete skill.abilityModifier;
        delete skill.miscModifier;
        delete skill.hiddenModifier;

        var collection = app.mongodb.database.collection('skills');
        collection.findAndModify({ _id }, [], { $set: skill }, { new: true, upsert: true }, function (err, doc) {
            if (err) throw err;
            callback(doc.value);
        });
    };

    app.createService('skills', service);
}
