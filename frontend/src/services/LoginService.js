import HttpServer from 'Shared/services/HttpServer';

class LoginService extends HttpServer {
    constructor() {
        super({
            url: '/authentication'
        });
    }

    async login(payload) {
        if (!payload.strategy) payload.strategy = 'jwt';

        try {
            var response = this.service.post(this.url, payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new LoginService();
