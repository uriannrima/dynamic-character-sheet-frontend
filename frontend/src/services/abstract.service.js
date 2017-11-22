import HttpService from 'Shared/services/HttpService';
import AuthService from 'Shared/services/AuthService';

export default class AbstractService extends HttpService {
    constructor({ model, url }) {
        super({ url });
        Object.assign(this, { model });
    }

    create(data = {}) {
        return this.model(data);
    }

    async getHeaders() {
        var accessToken = await AuthService.getAuthentication();
        return {
            Authorization: accessToken
        };
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
            var headers = await this.getHeaders();
            var serverCall = model._id ? this.service.post : this.service.put;
            var response = await serverCall(this.url, model, { headers });
            return this.model(response.data);
        } catch (error) {
            throw error;
        }
    }
}
