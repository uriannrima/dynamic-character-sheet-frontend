import HttpLayer from '@/services/layers/HttpLayer'
import SocketLayer from '@/services/layers/SocketLayer'
import AuthService from '@/services/auth/AuthService'
import { IEntity } from '@/domain/interfaces/IEntity'
import { MappingService, IConstructor } from '@/services/bases/mapping.service';

export class BaseHttpService<TModel extends IEntity = any> extends HttpLayer {
  public socket: SocketLayer;
  constructor({ url, constructors }: { url: string, constructors?: Array<IConstructor<TModel>> }) {
    super({ url })
    this.socket = new SocketLayer({ serviceName: url.replace('/', '') })
    MappingService.addClassMaps(constructors)
  }

  async getHeaders() {
    var accessToken = await AuthService.getAuthentication()
    return {
      Authorization: accessToken
    }
  }

  async get(id: string = '', _: any = {}) {
    try {
      var headers = await this.getHeaders()
      const response = await this.service.get<TModel>(this.url + `/${id}`, { headers })
      return MappingService.getIstanceAs(response.data);
    } catch (error) {
      throw error
    }
  }

  async find(_ = {}) {
    try {
      var headers = await this.getHeaders()
      const response = await this.service.get<TModel[]>(this.url, { headers })
      return response.data.map(model => MappingService.getIstanceAs(model));
    } catch (error) {
      throw error
    }
  }

  async create(model: TModel) {
    try {
      var headers = await this.getHeaders()
      const response = await this.service.post<TModel>(this.url, model, { headers });
      return MappingService.getIstanceAs(response.data);
    } catch (error) {
      throw error
    }
  }

  async update(model: TModel) {
    try {
      const { _id } = model
      var headers = await this.getHeaders()
      const response = await this.service.put<TModel>(this.url + `/${_id}`, model, { headers });
      return MappingService.getIstanceAs(response.data);
    } catch (error) {
      throw error
    }
  }

  async remove(id: string) {
    try {
      var headers = await this.getHeaders()
      const response = await this.service.delete(this.url + `/${id}`, { headers })
      return MappingService.getIstanceAs(response.data);
    } catch (error) {
      throw error;
    }
  }

  async patch(_id: string, patch: any) {
    try {
      var headers = await this.getHeaders()
      return this.service.patch(this.url + `/${_id}`, patch, { headers })
    } catch (error) {
      throw error
    }
  }

  register(methodName: string, callback: (...args: any[]) => void) {
    console.log("HttpLayer doesn't support registration. Using nested socket layer.")
    this.socket.feathers.on(methodName, callback)
  }

  emit(methodName: string, payload?: any) {
    console.log("HttpLayer doesn't support emit. Using nested socket layer.")
    this.socket.feathers.io.emit('custom', methodName, this.socket.serviceName, payload)
  }
}

export default BaseHttpService;
