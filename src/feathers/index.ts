import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import auth from '@feathersjs/authentication-client'
import Options from './options'

const app = feathers()

if (process.env.VUE_APP_BASE_URL) {
  const socket = io(process.env.VUE_APP_BASE_URL)

  // Set up Socket.io client with the socket
  app.configure(socketio(socket))
}

// Set up Authentication client with options
app.configure(auth(Options.Authentication))

export default app
