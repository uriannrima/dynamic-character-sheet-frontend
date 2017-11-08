/* eslint-disable no-console */
const express = require('express');
const logger = require('winston');
const api = express();
const app = require('./app');
api.use('/api', app);
const port = app.get('port');
const server = api.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
