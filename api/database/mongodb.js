const MongoClient = require('mongodb').MongoClient;

module.exports = function (app) {
    var mongodb = {
        database: null,
        connectionString: 'mongodb://uriann:02402806@ds135912.mlab.com:35912/web-dcs',
        connect: function (callback) {
            MongoClient.connect(this.connectionString, (err, database) => {
                if(err) throw err;
                this.database = database;
                callback();
            })
        }
    };

    app.mongodb = mongodb;

    return mongodb;
}