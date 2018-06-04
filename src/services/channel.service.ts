import BaseSocketService from 'shared/services/bases/BaseSocketService';
import { Character } from 'domain/character';

class ChannelService extends BaseSocketService {
  constructor() {
    super({ url: '/channels' });
  }

  async sync(channelMapping: string[], payload: any) {
    return this.patch(channelMapping.join('/'), payload);
  }

  async onSync(callback: (...args: any[]) => void) {
    return this.register('patched', callback);
  }
}

export default new ChannelService();
