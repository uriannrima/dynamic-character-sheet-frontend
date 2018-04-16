import * as LanguageModule from 'domain/language.model';
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
