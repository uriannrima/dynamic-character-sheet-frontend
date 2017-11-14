const MongoClient = require('mongodb').MongoClient;

module.exports = function () {
  const app = this;
  const config = app.get('mongodb');
  const fallback = app.get('fallback');
  const promise = MongoClient.connect(config).then(database => {
    // console.log('Connected to Mongolab.');
    return database;
  }).catch(() => {
    // console.info(`Error while trying to connect to Mongolab: ${error}`);
    // console.info('Trying to connect to local database.');
    return MongoClient.connect(fallback).then(database => {
      // console.log('Connected to local database.');
      return database;
    });
  });

  app.set('mongoClient', promise);
};
