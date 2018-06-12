const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mock/db.json');

const middlewares = jsonServer.defaults({
  id: '_id'
});

server.use(middlewares);

server.use('/socket.io/*', (req, res) => {
  console.log('Socket Mock');
  res.status(200).send('OK');
});

server.use('/authentication', (req, res) => {
  console.log('Auth Mock');
  const userSession = {
    accessToken: '123456'
  };
  res.status(200).json(userSession);
});

server.use(router);

server.listen(5000, () => {
  console.log('API Mock Running...')
});
