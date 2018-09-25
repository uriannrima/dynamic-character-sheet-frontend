import SocketLayer from '@/services/layers/SocketLayer'
import { LoginPayload, RefreshPayload } from '@/services/auth/LoginPayload'
import { UserSession } from '@/services/auth/UserSession';

export default class SocketAuth extends SocketLayer {
  constructor() {
    super({
      serviceName: 'authentication'
    })
  }

  async login(payload: LoginPayload): Promise<UserSession> {
    try {
      payload.strategy = 'local'
      var userSession: UserSession = await this.feathers.authenticate(payload);
      return userSession
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

  async refresh(_: RefreshPayload) {
    console.log('Not implemented.')
  }
}
