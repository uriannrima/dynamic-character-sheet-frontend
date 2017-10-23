const SizeModule = require('modules/size.module');

module.exports = function (app) {
    var service = {};

    service.getAll = function (callback) {
        var collection = app.mongodb.database.collection('sizes');
        collection.find({}).toArray(function (err, records) {
            if (err) throw err;
            var sizes = records.map(record => {
                return new SizeModule.Size(record);
            })
            callback(sizes);
        });
    };

    app.createService('sizes', service);
}
