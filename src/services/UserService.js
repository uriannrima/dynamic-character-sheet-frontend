import HttpService from 'Shared/services/HttpService';

class UserService extends HttpService {
  constructor() {
    super({
      url: '/users'
    });
  }

  async register(payload) {
    try {
      var response = await this.service.post(this.url, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
