const ObjectID = require('mongodb').ObjectID;
const CharacterModule = require('modules/character.module');
const featService = require('./feat.service');

module.exports = function(app) {
    var service = {};

    service.getAll = async function() {
        var collection = app.mongodb.database.collection('characters');
        try {
            let characters = await collection.find({}).toArray();
            return characters.map(character => new CharacterModule.Character(character));
        } catch (e) {
            console.log(e);
            return [];
        }
    };

    service.getById = async function(id) {
        try {
            var collection = app.mongodb.database.collection('characters');
            let character = await collection.findOne({ _id: new ObjectID(id) });
            return new CharacterModule.Character(character);
        } catch (e) {
            console.log(e);
            throw e;
        }
    };

    service.saveOrUpdate = async function(character) {
        try {
            const _id = new ObjectID(character._id);
            delete character._id;
            var collection = app.mongodb.database.collection('characters');
            await collection.findAndModify({ _id }, [], { $set: character }, { new: true, upsert: true });
            return true;
        } catch (e) {
            console.log(e);
            throw e;
        }
    };

    service.addFeat = async function(characterId, featId) {
        try {
            // Query both feat and character at the same time.
            // But await for both of them to resolve.
            let [character, feat] = await Promise.all([
                service.getById(characterId),
                featService.getById(featId)
            ]);

            if (!feat || !character) return false;

            feat._id = new ObjectID();
            character.feats.push(feat);
            await service.saveOrUpdate(character);

            return feat;
        } catch (e) {
            console.log(e);
            throw e;
        }
    };

    service.removeFeat = async function(characterId, featId) {
        try {
            // Query both feat and character at the same time.
            // But await for both of them to resolve.
            let [character, feat] = await Promise.all([
                service.getById(characterId),
                featService.getById(featId)
            ]);

            if (!feat || !character) return false;

            const index = character.feats.findIndex(f => f._id === featId);
            character.feats = character.feats.splice(index, 1);

            return await service.saveOrUpdate(character);
        } catch (e) {
            console.log(e);
            throw e;
        }
    };

    service.resetSkills = function(character, callback) {
        var skillsColl = app.mongodb.database.collection('skills');
        skillsColl.find({ default: true }).toArray(function(e, records) {
            character.skills = records;
            service.saveOrUpdate(character, callback);
        });
    }

    app.createService('character', service);
}
