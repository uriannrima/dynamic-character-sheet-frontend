import * as FeatModule from 'domain/feat.model';
import AbstractService from './abstract.service';

class FeatService extends AbstractService {
  constructor() {
    super({
      model: FeatModule.Feat,
      url: '/feats'
    });
  }
}

export default new FeatService();
