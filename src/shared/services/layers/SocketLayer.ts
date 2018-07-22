import feathers from '@/feathers'
import { Service } from '@feathersjs/feathers'

export default class SocketLayer<T = any> {
  feathers: any;
  service: Service<T>;
  serviceName: string;

  constructor ({ serviceName = '' }: { serviceName: string }) {
    this.serviceName = serviceName
    this.feathers = feathers
    this.service = feathers.service(serviceName)
  }
}
