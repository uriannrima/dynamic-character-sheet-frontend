import feathers from 'feathers';

export default class SocketLayer {
  constructor({ serviceName }) {
    Object.assign(this, { serviceName }, {
      feathers,
      service: feathers.service(serviceName)
    });
  }
}
