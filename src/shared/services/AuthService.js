import HttpLayer from './HttpLayer';
import SocketLayer from './SocketLayer';
import ApplicationDatabase from 'shared/databases/ApplicationDatabase';

class HttpAuth extends HttpLayer {
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

class SocketAuth extends SocketLayer {
  constructor() {
    super({
      serviceName: 'authentication'
    });
  }

  async login(payload) {
    try {
      payload.strategy = 'local';
      var accessToken = await this.feathers.authenticate(payload);
      return accessToken;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      this.feathers.logout();
      return true;
    } catch (error) {
      throw error;
    }
  }
}

class AuthService {
  constructor(layer) {
    var service = layer === 'HTTP' ? new HttpAuth() : new SocketAuth();
    Object.assign(this, {
      authenticated: null,
      service
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
        const accessToken = await this.service.refresh(payload);
        await this.setAuthentication(accessToken);
      } catch (error) {
        await this.removeAuthentication();
      }

      return this.authenticated;
    }
  }

  async login(payload) {
    try {
      const accessToken = await this.service.login(payload);
      await this.setAuthentication(accessToken);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      var auth = await this.getAuthentication();
      this.service.logout(auth.accessToken);
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
