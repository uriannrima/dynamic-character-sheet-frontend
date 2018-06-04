import SocketLayer from '../layers/SocketLayer';
import { IEntity } from '@/domain/interfaces/IEntity';
import { Paginated } from '@feathersjs/feathers';

export default abstract class BaseSocketService<TModel extends IEntity = any> extends SocketLayer {
  constructor({ url }: { url: string }) {
    super({ serviceName: url.replace('/', '') });
  }

  async get(id: string = '', query: any = {}): Promise<TModel> {
    return await this.service.get(id, { query });
  }

  async find(query = {}): Promise<TModel[] | Paginated<TModel>> {
    return await this.service.find({ query });
  }

  async create(model: TModel): Promise<TModel> {
    return await this.service.create(model);
  }

  async update(model: TModel): Promise<TModel> {
    const { _id } = model;
    return await this.service.update(_id, model);
  }

  async remove(id: string): Promise<TModel> {
    return await this.service.remove(id);
  }

  async patch(_id: string, patch: any): Promise<TModel> {
    return await this.service.patch(_id, patch, {});
  }

  register(methodName: string, callback: (...args: any[]) => void) {
    this.service.on(methodName, callback);
  }

  emit(methodName: string, payload?: any) {
    this.feathers.io.emit('custom', methodName, this.serviceName, payload);
  }
}
