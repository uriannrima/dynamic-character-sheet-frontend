import SocketLayer from '../layers/SocketLayer';

export default class SocketAuth extends SocketLayer {
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