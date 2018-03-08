import * as SizeModule from 'modules/size.module';
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
