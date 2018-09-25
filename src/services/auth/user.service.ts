import HttpLayer from '@/services/layers/HttpLayer'

class UserService extends HttpLayer {
  constructor() {
    super({ url: '/users' })
  }

  async register(payload: any) {
    try {
      var response = await this.service.post(this.url, payload)
      return response.data
    } catch (error) {
      throw error
    }
  }
}

export default new UserService()
