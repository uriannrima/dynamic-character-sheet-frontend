import feathers from 'feathers';

export default class SocketService {
  constructor({ serviceName }) {
    Object.assign(this, { serviceName }, {
      feathers,
      service: feathers.service(serviceName)
    });
  }
}
