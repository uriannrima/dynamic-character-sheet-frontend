const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mock/db.json');
router.db._.id = '_id';

const middlewares = jsonServer.defaults();

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

const channels = [];
server.post('/channels', (_, res) => {
  channels.push({
    id: channels.length
  });
  res.json(channels[channels.length - 1]);
})

server.use(router);

server.listen(5000, () => {
  console.log('API Mock Running...')
});
