import HttpLayer from '../layers//HttpLayer'
import SocketLayer from '../layers//SocketLayer'
import AuthService from '../auth/AuthService'
import { IEntity } from '@/domain/interfaces/IEntity'

export class BaseHttpService<TModel extends IEntity = any> extends HttpLayer {
  public socket: SocketLayer;
  constructor({ url }: { url: string }) {
    super({ url })
    this.socket = new SocketLayer({ serviceName: url.replace('/', '') })
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
      return response.data;
    } catch (error) {
      throw error
    }
  }

  async find(_ = {}) {
    try {
      var headers = await this.getHeaders()
      const response = await this.service.get<TModel[]>(this.url, { headers })
      return response.data;
    } catch (error) {
      throw error
    }
  }

  async create(model: TModel) {
    try {
      var headers = await this.getHeaders()
      return this.service.post<TModel>(this.url, model, { headers });
    } catch (error) {
      throw error
    }
  }

  async update(model: TModel) {
    try {
      const { _id } = model
      var headers = await this.getHeaders()
      return this.service.post<TModel>(this.url + `/${_id}`, model, { headers });
    } catch (error) {
      throw error
    }
  }

  async remove(id: string) {
    try {
      var headers = await this.getHeaders()
      return this.service.delete(this.url + `/${id}`, { headers })
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
