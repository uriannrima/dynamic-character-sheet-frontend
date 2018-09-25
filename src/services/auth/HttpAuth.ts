import HttpLayer from '@/services/layers/HttpLayer'
import { LoginPayload, RefreshPayload } from '@/services/auth/login-payload'
import { UserSession } from '@/services/auth/UserSession';

export default class HttpAuth extends HttpLayer {
  constructor() {
    super({
      url: '/authentication'
    })
  }

  async refresh(payload: RefreshPayload) {
    try {
      payload.strategy = 'jwt';
      var { data: { accessToken } } = await this.service.post<UserSession>(this.url, payload)
      return accessToken
    } catch (error) {
      throw error
    }
  }

  async login(payload: LoginPayload): Promise<UserSession> {
    try {
      payload.strategy = 'local'
      var { data } = await this.service.post<UserSession>(this.url, payload)
      return data
    } catch (error) {
      throw error
    }
  }

  async logout(accessToken?: string | null | undefined) {
    try {
      var headers = { Authorization: accessToken }
      this.service.delete(this.url, { headers })
      return true
    } catch (error) {
      throw error
    }
  }
}
