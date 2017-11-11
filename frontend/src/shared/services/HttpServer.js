import axios from 'axios';
import Constants from 'Constants';

export default class HttpService {
    constructor({ url }) {
        Object.assign(this, { url }, {
            service: axios.create({
                baseURL: Constants.API_URL + '/'
            })
        });
    }
}
