import * as SizeModule from 'domain/size.model';
import AbstractService from './abstract.service';

class SizeService extends AbstractService {
  constructor() {
    super({
      model: SizeModule.Size,
      url: '/size'
    });
  }
  async getAll() {
    return SizeModule.All;
  }
}

export default new SizeService();
