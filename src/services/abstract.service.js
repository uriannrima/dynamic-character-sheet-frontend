/*eslint no-unused-vars: [0]*/
import { HttpLayer, SocketLayer } from '@Shared/services/ServiceLayer';

export default class AbstractService extends SocketLayer {
  constructor({ model, url }) {
    super({ url });
    Object.assign(this, { model });
  }

  create(data = {}) {
    return this.model(data);
  }

  async getData(id) {
    const response = await super.get(id);
    return response.data;
  }

  async get(id) {
    const data = await this.getData(id);
    return this.model(data);
  }

  async getAll() {
    const response = await super.getAll();
    return response.data.map(data => this.model(data));
  }

  async saveOrUpdate(model) {
    const response = await super.saveOrUpdate(model);
    return this.model(response.data);
  }

  async patch(id, model) {
    return await super.patch(id, model);
  }
}
