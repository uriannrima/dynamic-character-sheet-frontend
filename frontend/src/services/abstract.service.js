import axios from 'axios';
import Constants from 'Constants';

export default function (creator, url) {
    return {
        service: axios.create({
            baseURL: Constants.API_URL + '/'
        }),
        creator,
        url,
        create: (data) => {
            return this.creator(data);
        },
        get: async function (id) {
            try {
                var response = await this.service.get(this.url, { id });
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        getAll: function () {
            try {
                var response = this.service.get(this.url);
                return response.data;
            } catch (error) {
                throw error;
            }
        }
    }
}
