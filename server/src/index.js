/* eslint-disable no-console */
// const express = require('express');
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port); // express().use('/api', app).listen(port);
// app.setup(server);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
