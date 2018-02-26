import feathers from '@feathersjs/feathers'
import auth from '@feathersjs/authentication-client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import Constants from 'Constants';
import Options from './options';

const socket = io(Constants.SOCKET_URL);
const app = feathers();

// Set up Socket.io client with the socket
app.configure(socketio(socket));

// Set up Authentication client with options
app.configure(auth(Options.Authentication));

export default app;
