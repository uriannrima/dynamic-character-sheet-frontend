import HttpService from 'shared/services/HttpService';
import ApplicationDatabase from 'shared/databases/ApplicationDatabase';

class AuthService extends HttpService {
  constructor() {
    super({
      url: '/authentication'
    });

    Object.assign(this, {
      authenticated: null
    });
  }

  async setAuthentication(accessToken = '') {
    if (accessToken === '') throw new Error('Token must be provided.');
    this.authenticated = true;
    return await ApplicationDatabase.Instance.setItem('accessToken', accessToken);
  }

  async getAuthentication() {
    return await ApplicationDatabase.Instance.getItem('accessToken');
  }

  async removeAuthentication() {
    return await ApplicationDatabase.Instance.removeItem('accessToken');
  }

  async refresh() {
    if (this.authenticated == null) {
      try {
        var payload = {
          strategy: 'jwt'
        };
        var { data: { accessToken } } = await this.service.post(this.url, payload);
        await this.setAuthentication(accessToken);
      } catch (error) {
        await this.removeAuthentication();
      }

      return this.authenticated;
    }
  }

  async login(payload) {
    try {
      payload.strategy = 'local';
      var { data: { accessToken } } = await this.service.post(this.url, payload);
      await this.setAuthentication(accessToken);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      var auth = await this.getAuthentication();
      var headers = {
        Authorization: auth.accessToken
      }
      this.service.delete(this.url, { headers });
      this.authenticated = false;
      return true;
    } catch (error) {
      throw error;
    }
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new AuthService();
