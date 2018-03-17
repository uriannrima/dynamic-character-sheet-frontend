import HttpLayer from 'shared/services/layers/HttpLayer';

class UserService extends HttpLayer {
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
