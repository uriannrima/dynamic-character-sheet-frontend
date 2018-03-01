import HttpService from 'Shared/services/HttpService';
import AuthService from 'Shared/services/AuthService';

export default class AbstractService extends HttpService {
  constructor({ model, url }) {
    super({ url });
    Object.assign(this, { model });
  }

  async create(data = {}) {
    return this.model(data);
  }

  async getHeaders() {
    var accessToken = await AuthService.getAuthentication();
    return {
      Authorization: accessToken
    };
  }

  async getData(id) {
    try {
      var headers = await this.getHeaders();
      var response = await this.service.get(this.url + `/${id}`, { headers });
      return response.data
    } catch (error) {
      throw error;
    }
  }

  async get(id) {
    try {
      var headers = await this.getHeaders();
      var response = await this.service.get(this.url + `/${id}`, { headers });
      return this.model(response.data);
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      var headers = await this.getHeaders();
      var response = await this.service.get(this.url, { headers });
      return response.data.map(data => this.model(data));
    } catch (error) {
      throw error;
    }
  }

  async saveOrUpdate(model) {
    try {
      var { _id } = model;
      var headers = await this.getHeaders();
      var serverCall = _id ? this.service.put : this.service.post;
      var url = this.url + (_id ? `/${_id}` : '');
      var response = await serverCall(url, model, { headers });
      return this.model(response.data);
    } catch (error) {
      throw error;
    }
  }
}
