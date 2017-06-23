const MongoClient = require('mongodb').MongoClient;

module.exports = function (app) {
    var mongodb = {
        database: null,
        connectionString: 'mongodb://uriann:02402806@cluster0-shard-00-00-uhpwr.mongodb.net:27017,cluster0-shard-00-01-uhpwr.mongodb.net:27017,cluster0-shard-00-02-uhpwr.mongodb.net:27017?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
        connect: function (callback) {
            MongoClient.connect(this.connectionString, (err, database) => {
                if(err) throw err;
                this.database = database;
                callback();
            })
        }
    };

    return mongodb;
}