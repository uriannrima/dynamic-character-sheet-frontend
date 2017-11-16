import HttpService from 'Shared/services/HttpService';

class AuthService extends HttpService {
    constructor() {
        super({
            url: '/authentication'
        });

        Object.assign(this, {
            authenticated: false
        });
    }

    async login(payload) {
        try {
            payload.strategy = 'local';
            await this.service.post(this.url, payload);
            this.authenticated = !this.authenticated;
            return this.authenticated;
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            this.service.delete(this.url);
            this.authenticated = !this.authenticated;
            return this.authenticated;
        } catch (error) {
            throw error;
        }
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new AuthService();
