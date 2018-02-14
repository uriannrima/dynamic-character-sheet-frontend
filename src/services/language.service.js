import * as LanguageModule from 'Modules/language.module';
import AbstractService from './abstract.service';

class LanguageService extends AbstractService {
  constructor() {
    super({
      model: LanguageModule.Language,
      url: '/languages'
    });
  }
}

export default new LanguageService();
