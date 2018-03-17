import HttpLayer from '../layers/HttpLayer';

export default class HttpAuth extends HttpLayer {
  constructor() {
    super({
      url: '/authentication'
    });
  }

  async refresh() {
    try {
      var payload = { strategy: 'jwt' };
      var { data: { accessToken } } = await this.service.post(this.url, payload);
      return accessToken;
    } catch (error) {
      throw error;
    }
  }

  async login(payload) {
    try {
      payload.strategy = 'local';
      var { data: { accessToken } } = await this.service.post(this.url, payload);
      return accessToken;
    } catch (error) {
      throw error;
    }
  }

  async logout(accessToken) {
    try {
      var headers = { Authorization: accessToken }
      this.service.delete(this.url, { headers });
      return true;
    } catch (error) {
      throw error;
    }
  }
}
