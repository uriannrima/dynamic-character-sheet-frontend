import axios from 'axios';
import Constants from 'Constants';

export default class HttpService {
    constructor({ url }) {
        Object.assign(this, { url }, {
            service: axios.create({
                baseURL: Constants.API_URL + '/'
            })
        });

        this.service.interceptors.response.use(undefined, error => {
            if (error.response.data.code === 401) {
                window.Router.push('/');
            } else {
                Promise.reject(error);
            }
        });
    }
}
