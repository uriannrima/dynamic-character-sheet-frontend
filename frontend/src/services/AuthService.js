import HttpServer from 'Shared/services/HttpServer';

class AuthService extends HttpServer {
    constructor() {
        super({
            url: '/authentication'
        });
    }

    async login(payload) {
        try {
            payload.strategy = 'local';
            var { data: { accessToken } } = await this.service.post(this.url, payload);
            localStorage.setItem('access_token', accessToken);
            return accessToken;
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            localStorage.removeItem('access_token');
            return true;
        } catch (error) {
            throw error;
        }
    }

    getAuthorization() {
        return localStorage.getItem('access_token');
    }

    isAuthenticated() {
        return localStorage.getItem('access_token') !== null;
    }
}

export default new AuthService();
