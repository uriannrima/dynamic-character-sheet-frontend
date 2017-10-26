import axios from 'axios';
import Constants from 'Constants';

export default class AbstractService {
    constructor({ model, url }) {
        Object.assign(this, { model, url }, {
            service: axios.create({
                baseURL: Constants.API_URL + '/'
            })
        });
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

    async getData(id) {
        try {
            var response = await this.service.get(this.url + `/${id}`);
            return response.data;
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
}
