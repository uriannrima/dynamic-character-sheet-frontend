import SocketLayer from '../layers/SocketLayer'
import { LoginPayload } from './login-payload'

export default class SocketAuth extends SocketLayer {
  constructor() {
    super({
      serviceName: 'authentication'
    })
  }

  async login(payload: LoginPayload) {
    try {
      payload.strategy = 'local'
      var accessToken = await this.feathers.authenticate(payload)
      return accessToken
    } catch (error) {
      throw error
    }
  }

  async logout(accessToken?: string | null | undefined) {
    try {
      this.feathers.logout(accessToken)
      return true
    } catch (error) {
      throw error
    }
  }

  async refresh() {
    console.log('Not implemented.')
  }
}
