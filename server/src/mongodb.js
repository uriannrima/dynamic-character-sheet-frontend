const MongoClient = require('mongodb').MongoClient;

module.exports = function () {
  const app = this;
  const config = app.get('mongodb');
  const fallback = app.get('fallback');
  var connectionString = config;
  ['DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_PORT', 'DB_NAME'].map(parameter => {
    connectionString = connectionString.replace(parameter, process.env[parameter]);
  });
  const promise = MongoClient.connect(connectionString).then(database => {
    return database;
  }).catch(() => {
    return MongoClient.connect(fallback).then(database => {
      return database;
    });
  });

  app.set('mongoClient', promise);
};
