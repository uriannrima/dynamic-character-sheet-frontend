import feathers from '@feathersjs/feathers'
import socketClient from '@feathersjs/socketio-client'
import restClient from '@feathersjs/rest-client';
import io from 'socket.io-client'
import auth from '@feathersjs/authentication-client'
import Options from './options'

const app = feathers()

if (process.env.VUE_APP_BASE_URL) {
  switch (process.env.VUE_APP_LAYER) {
    case 'SOCKET':
      const socket = io(process.env.VUE_APP_BASE_URL)
      // Set up Socket.io client with the socket
      app.configure(socketClient(socket))
      break;
    case 'HTTP':
      const rest = restClient(process.env.VUE_APP_BASE_URL)
      // Set up Rest client
      app.configure(rest.fetch(window.fetch))
      break;
    default:
      throw Error('Base URL not defined.');
  }
}

// Set up Authentication client with options
app.configure(auth(Options.Authentication))

export default app
