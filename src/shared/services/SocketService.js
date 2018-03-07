import feathers from '@Feathers';

export default class SocketService {
  constructor({ serviceName }) {
    Object.assign(this, { serviceName }, {
      feathers,
      service: feathers.service(serviceName)
    });
  }
}
