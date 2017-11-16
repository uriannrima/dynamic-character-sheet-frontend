const MongoClient = require('mongodb').MongoClient;

module.exports = function () {
  const app = this;
  const config = app.get('mongodb');
  const fallback = app.get('fallback');
  const promise = MongoClient.connect(config).then(database => {
    return database;
  }).catch(() => {
    return MongoClient.connect(fallback).then(database => {
      return database;
    });
  });

  app.set('mongoClient', promise);
};
