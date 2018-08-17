import SocketLayer from '@/shared/services/layers/SocketLayer'
import { IEntity } from '@/domain/interfaces/IEntity'
import { Paginated } from '@feathersjs/feathers'
import { MappingService, IConstructor } from '@/services/mapping.service';

export default class BaseSocketService<TModel extends IEntity = any> extends SocketLayer<TModel> {
  constructor({ url, constructors }: { url: string, constructors?: Array<IConstructor<TModel>> }) {
    super({ serviceName: url.replace('/', '') })
    MappingService.addClassMaps(constructors)
  }

  async get(id: string = '', query: any = {}): Promise<TModel> {
    try {
      const response = await this.service.get(id, { query })
      return MappingService.getIstanceAs(response);
    } catch (error) {
      throw error;
    }
  }

  async find(query = {}): Promise<TModel[] | Paginated<TModel>> {
    try {
      const response = await this.service.find({ query })

      if (response instanceof Array) {
        return response.map(model => MappingService.getIstanceAs<TModel>(model));
      }

      return response;
    } catch (error) {
      throw error;
    }
  }

  async create(model: TModel): Promise<TModel> {
    try {
      const response = await this.service.create(model);
      return MappingService.getIstanceAs(response);
    } catch (error) {
      throw error
    }
  }

  async update(model: TModel): Promise<TModel> {
    try {
      const { _id } = model
      const response = await this.service.update(_id, model)
      return MappingService.getIstanceAs(response);
    } catch (error) {
      throw error
    }
  }

  async remove(id: string): Promise<TModel> {
    try {
      const response = await this.service.remove(id)
      return MappingService.getIstanceAs(response);
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
