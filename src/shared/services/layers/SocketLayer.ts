import feathers from '@/feathers';
import { Service } from '@feathersjs/feathers';

export default class SocketLayer {
  feathers: any;
  service: Service<any>;
  serviceName: string;

  constructor({ serviceName = '' }: { serviceName: string }) {
    this.serviceName = serviceName;
    this.feathers = feathers;
    this.service = feathers.service(serviceName);
  }
}
