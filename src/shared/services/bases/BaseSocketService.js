import SocketLayer from '../layers/SocketLayer';

export default class BaseSocketService extends SocketLayer {
  constructor({ url }) {
    super({ serviceName: url.replace('/', '') });
  }

  async get(id) {
    const data = await this.service.get(id, {});
    return {
      data
    };
  }

  async getAll() {
    const data = await this.service.find({});
    return {
      data
    };
  }

  async saveOrUpdate(model) {
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

  async create(model) {
    return {
      data: await this.service.create(model)
    };
  }

  async remove(id) {
    var data = await this.service.remove(id);
    return {
      data
    }
  }

  async patch(_id, patch) {
    return await this.service.patch(_id, patch, {});
  }

  register(methodName, callback) {
    this.service.on(methodName, callback);
  }

  emit(methodName, payload) {
    this.feathers.io.emit('custom', methodName, this.serviceName, payload);
  }
}