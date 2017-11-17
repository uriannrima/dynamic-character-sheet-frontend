import HttpService from 'Shared/services/HttpService';

class AuthService extends HttpService {
    constructor() {
        super({
            url: '/authentication'
        });

        Object.assign(this, {
            authenticated: null
        });

        this.check();
    }

    async check() {
        if (this.authenticated == null) {
            try {
                var payload = {
                    strategy: 'jwt'
                };
                await this.service.post(this.url, payload);
                this.authenticated = true;
            } catch (error) {
                throw error;
            }
        }
    }

    async login(payload) {
        try {
            payload.strategy = 'local';
            await this.service.post(this.url, payload);
            this.authenticated = true;
            return this.authenticated;
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            this.service.delete(this.url);
            this.authenticated = false;
            return true;
        } catch (error) {
            return true;
        }
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new AuthService();
