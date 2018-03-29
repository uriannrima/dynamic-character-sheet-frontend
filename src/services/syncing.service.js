import SocketLayer from 'shared/services/layers/SocketLayer';

class SyncingService extends SocketLayer {
  constructor() {
    super({ serviceName: 'syncing' });
  }

  async create(payload) {
    this.service.create(payload);
  }
}

export default new SyncingService();
