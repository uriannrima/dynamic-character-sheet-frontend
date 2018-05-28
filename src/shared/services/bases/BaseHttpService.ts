import HttpLayer from '../layers//HttpLayer';
import SocketLayer from '../layers//SocketLayer';
import AuthService from '../auth/AuthService';

export class BaseHttpService extends HttpLayer {
  public socket: SocketLayer;
  constructor({ url }: { url: string }) {
    super({ url });
    this.socket = new SocketLayer({ serviceName: url.replace('/', '') });
  }

  async getHeaders() {
    var accessToken = await AuthService.getAuthentication();
    return {
      Authorization: accessToken
    };
  }

  async get(id: string) {
    try {
      var headers = await this.getHeaders();
      return await this.service.get(this.url + `/${id}`, { headers });
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      var headers = await this.getHeaders();
      return await this.service.get(this.url, { headers });
    } catch (error) {
      throw error;
    }
  }

  async saveOrUpdate(model: any) {
    try {
      var { _id } = model;
      var headers = await this.getHeaders();
      var serverCall = _id ? this.service.put : this.service.post;
      var url = this.url + (_id ? `/${_id}` : '');
      return await serverCall(url, model, { headers });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    var headers = await this.getHeaders();
    return await this.service.delete(this.url + `/${id}`, { headers });
  }

  async patch(_id: string, patch: any) {
    try {
      var headers = await this.getHeaders();
      return await this.service.patch(this.url + `/${_id}`, patch, { headers });
    } catch (error) {
      throw error;
    }
  }

  register(methodName: string, callback: (...args: any[]) => void) {
    console.log("HttpLayer doesn't support registration. Using nested socket layer.");
    this.socket.feathers.on(methodName, callback);
  }

  emit(methodName: string, payload: any) {
    console.log("HttpLayer doesn't support emit. Using nested socket layer.");
    this.socket.feathers.io.emit('custom', methodName, this.socket.serviceName, payload);
  }
}
