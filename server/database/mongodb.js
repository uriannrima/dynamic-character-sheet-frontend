const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;

module.exports = function (app) {
    var mongodb = {
        database: null,
        databaseName: "web-dcs",
        connectionString: 'mongodb://uriann:02402806@ds135912.mlab.com:35912/',
        fallbackConnectionString: "mongodb://localhost/",
        connect: function (callback) {
            MongoClient
                .connect(this.connectionString + this.databaseName)
                .then(database => {
                    console.log('Connected to Mongolab.');
                    this.database = database;
                    callback();
                })
                .catch(error => {
                    console.info("Error while trying to connect to Mongolab");
                    console.info("Trying to connect to local database.");
                    return MongoClient.connect(this.fallbackConnectionString + this.databaseName).then(database => {
                        console.log('Connected to local database.');
                        this.database = database;
                        callback();
                    });
                });
        }
    };

    app.mongodb = mongodb;
}