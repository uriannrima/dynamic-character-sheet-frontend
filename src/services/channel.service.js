import BaseSocketService from 'shared/services/bases/BaseSocketService';

class ChannelService extends BaseSocketService {
  constructor() {
    super({ url: '/channels' });
  }

  async sync(channelMapping, payload) {
    return this.patch(channelMapping.join('/'), payload, {});
  }

  async onSync(callback) {
    return this.register('patched', callback);
  }
}

export default new ChannelService();
