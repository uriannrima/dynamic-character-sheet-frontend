import HttpService from 'Shared/services/HttpService';
import ApplicationDatabase from 'Shared/databases/ApplicationDatabase';

class AuthService extends HttpService {
    constructor() {
        super({
            url: '/authentication'
        });

        Object.assign(this, {
            authenticated: null
        });

        this.refresh();
    }

    async setAuthentication(accessToken = '') {
        if (accessToken === '') throw new Error('Token must be provided.');
        this.authenticated = true;
        return await ApplicationDatabase.Instance.session.add({
            accessToken
        });
    }

    async getAuthentication() {
        return ApplicationDatabase.Instance.session.first();
    }

    async removeAuthentication() {
        this.authenticated = false;
        // return await ApplicationDatabase.Instance.session.first().delete();
    }

    async refresh() {
        if (this.authenticated == null) {
            try {
                var payload = {
                    strategy: 'jwt'
                };
                var { data: { accessToken } } = await this.service.post(this.url, payload);
                await this.setAuthentication(accessToken);
            } catch (error) {
                await this.removeAuthentication();
            }

            return this.authenticated;
        }
    }

    async login(payload) {
        try {
            payload.strategy = 'local';
            var { data: { accessToken } } = await this.service.post(this.url, payload);
            await this.setAuthentication(accessToken);
            return true;
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
            throw error;
        }
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new AuthService();
