import SocketAuth from './SocketAuth';
import HttpAuth from './HttpAuth';

class AuthService {
  constructor(layer) {
    const service = layer === 'HTTP' ? new HttpAuth() : new SocketAuth();

    Object.assign(this, {
      authenticated: null,
      service
    });
  }

  async refresh() {
    try {
      return await this.service.refresh(payload);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async login(payload) {
    try {
      return await this.service.login(payload);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async logout() {
    try {
      return await this.service.logout();
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new AuthService();
