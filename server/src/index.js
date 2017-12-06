/* eslint-disable no-console */
const express = require('express');
const logger = require('winston');
const app = require('./app');
const port = process.env.PORT || app.get('port');
const host = process.env.IP || app.get('host');
const server = express().use('/api', app).listen(port);
app.setup(server);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', host, port)
);
