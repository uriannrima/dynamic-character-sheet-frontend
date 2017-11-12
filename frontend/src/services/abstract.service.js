import HttpServer from 'Shared/services/HttpServer';
import AuthService from 'Services/AuthService';

export default class AbstractService extends HttpServer {
    constructor({ model, url }) {
        super({ url });
        Object.assign(this, { model });
    }

    getHeaders() {
        return {
            headers: {
                Authorization: AuthService.getAuthorization()
            }
        }
    }

    create(data = {}) {
        return this.model(data);
    }

    async get(id) {
        try {
            var response = await this.service.get(this.url + `/${id}`, this.getHeaders());
            return this.model(response.data);
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            var response = await this.service.get(this.url, this.getHeaders());
            return response.data.map(data => this.model(data));
        } catch (error) {
            throw error;
        }
    }

    async saveOrUpdate(model) {
        try {
            var serverCall = model._id ? this.service.post : this.service.put;
            var response = await serverCall(this.url, model);
            return this.model(response.data);
        } catch (error) {
            throw error;
        }
    }
}
