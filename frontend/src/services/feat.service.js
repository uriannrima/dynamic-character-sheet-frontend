import FeatModule from 'Modules/feat.module';
import AbstractService from './abstract.service';

class FeatService extends AbstractService {
    constructor() {
        super({
            model: FeatModule.Feat,
            url: '/feat'
        });
    }
}

export default new FeatService();
