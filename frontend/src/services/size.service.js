import SizeModule from 'Modules/size.module';
import AbstractService from './abstract.service';

class SizeService extends AbstractService {
    constructor() {
        super({
            model: SizeModule.Size,
            url: '/size'
        });
    }
}

export default new SizeService();
