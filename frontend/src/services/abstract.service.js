import HttpService from 'Shared/services/HttpService';

export default class AbstractService extends HttpService {
    constructor({ model, url }) {
        super({ url });
        Object.assign(this, { model });
    }

    create(data = {}) {
        return this.model(data);
    }

    async get(id) {
        try {
            var response = await this.service.get(this.url + `/${id}`);
            return this.model(response.data);
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            var response = await this.service.get(this.url);
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
