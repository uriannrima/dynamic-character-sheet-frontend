import SocketLayer from '../layers/SocketLayer';

export default class BaseSocketService extends SocketLayer {
  constructor({ url }: { url: string }) {
    super({ serviceName: url.replace('/', '') });
  }

  async get(id: string = '', query = {}) {
    const data = await this.service.get(id, { query });
    return {
      data
    };
  }

  async getAll(query = {}) {
    const data = await this.service.find({ query });
    return {
      data
    };
  }

  async saveOrUpdate(model: any) {
    const { _id } = model;
    var data = null
    if (_id) {
      data = await this.service.update(_id, model);
    } else {
      data = await this.service.create(model);
    }

    return {
      data
    };
  }

  async create(model: any) {
    return {
      data: await this.service.create(model)
    };
  }

  async remove(id: string) {
    var data = await this.service.remove(id);
    return {
      data
    }
  }

  async patch(_id: string, patch: any) {
    return await this.service.patch(_id, patch, {});
  }

  register(methodName: string, callback: (...args: any[]) => void) {
    this.service.on(methodName, callback);
  }

  emit(methodName: string, payload: any) {
    this.feathers.io.emit('custom', methodName, this.serviceName, payload);
  }
}
