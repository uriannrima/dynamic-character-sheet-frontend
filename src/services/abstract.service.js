/* eslint no-unused-vars: [0] */
import BaseSocketService from 'shared/services/bases/BaseSocketService';

export default class AbstractService extends BaseSocketService {
  constructor({ model, url }) {
    super({ url });
    Object.assign(this, { Model: model });
  }

  create(data = {}) {
    return new this.Model(data);
  }

  async getData(id, query = {}) {
    const response = await super.get(id, query);
    return response.data;
  }

  async get(id, query = {}) {
    const data = await this.getData(id, query);
    return new this.Model(data);
  }

  async getAll(query = {}) {
    const response = await super.getAll(query);
    return response.data.map(data => new this.Model(data));
  }

  async saveOrUpdate(model) {
    const response = await super.saveOrUpdate(model);
    return new this.Model(response.data);
  }

  async remove(id) {
    return await super.remove(id);
  }

  async patch(id, model) {
    return await super.patch(id, model);
  }
}
