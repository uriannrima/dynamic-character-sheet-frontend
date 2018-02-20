import axios from 'axios';
import Constants from 'Constants';

var service = axios.create({
  baseURL: Constants.API_URL + '/'
});

export default class HttpService {
  constructor({ url }) {
    Object.assign(this, { url }, {
      service
    });
  }
}
