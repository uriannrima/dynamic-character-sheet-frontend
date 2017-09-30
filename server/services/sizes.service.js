const path = require('path');
var ObjectID = require('mongodb').ObjectID;
var sizeModule = require('modules/size.module');

module.exports = function (app) {
    var service = {};

    service.getAll = function (callback) {
        var collection = app.mongodb.database.collection('sizes');
        collection.find({}).toArray(function (err, records) {
            var sizes = records.map(record => {
                return new sizeModule.size(record);
            })
            callback(sizes);
        });
    };

    app.createService('sizes', service);
}