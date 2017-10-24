import axios from 'axios';
import Constants from 'Constants';

export default class AbstractService {
    constructor({ creator, url }) {
        Object.assign(this, { creator, url }, {
            service: axios.create({
                baseURL: Constants.API_URL + '/'
            })
        });
    }

    create(data = {}) {
        return this.creator(data);
    }

    async get(id) {
        try {
            var response = await this.service.get(this.url + `/${id}`);
            return this.creator(response.data);
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            var response = await this.service.get(this.url);
            return response.data.map(data => this.creator(data));
        } catch (error) {
            throw error;
        }
    }
}
