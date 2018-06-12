import SocketLayer from '../layers/SocketLayer'
import { IEntity } from '@/domain/interfaces/IEntity'
import { Paginated } from '@feathersjs/feathers'

export default class BaseSocketService<TModel extends IEntity = any> extends SocketLayer {
  constructor({ url }: { url: string }) {
    super({ serviceName: url.replace('/', '') })
  }

  async get(id: string = '', query: any = {}): Promise<TModel> {
    try {
      return this.service.get(id, { query })
    } catch (error) {
      throw error;
    }
  }

  async find(query = {}): Promise<TModel[] | Paginated<TModel>> {
    try {
      return this.service.find({ query })
    } catch (error) {
      throw error;
    }
  }

  async create(model: TModel): Promise<TModel> {
    try {
      return this.service.create(model)
    } catch (error) {
      throw error
    }
  }

  async update(model: TModel): Promise<TModel> {
    try {
      const { _id } = model
      return this.service.update(_id, model)
    } catch (error) {
      throw error
    }
  }

  async remove(id: string): Promise<TModel> {
    try {
      return this.service.remove(id)
    } catch (error) {
      throw error;
    }
  }

  async patch(_id: string, patch: any): Promise<TModel> {
    try {
      return this.service.patch(_id, patch, {})
    } catch (error) {
      throw error;
    }
  }

  register(methodName: string, callback: (...args: any[]) => void) {
    this.service.on(methodName, callback)
  }

  emit(methodName: string, payload?: any) {
    this.feathers.io.emit('custom', methodName, this.serviceName, payload)
  }
}
