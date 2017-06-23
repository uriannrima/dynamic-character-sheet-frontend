var database = require('../server.database');

exports.all = function (callBack) {
    var collection = database.get().collection('characters');
    collection.find().toArray(function (err, records) {
        callBack(err, records);
    });
}

exports.save = function (character, callBack) {
    var collection = database.get().collection('characters');
    collection.insert(character, function (err, records) {
        callBack(err, records);
    });
}

exports.update = function (character, callBack) {
    var collection = database.get().collection('characters');
    collection.update({ _id: character.id }, character, function (err, records) {
        callBack(err, records);
    });
}