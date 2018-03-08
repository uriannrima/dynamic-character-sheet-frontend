import * as CharacterModule from 'modules/character.module';
import AbstractService from './abstract.service';

class CharacterService extends AbstractService {
  constructor() {
    super({
      model: CharacterModule.Character,
      url: '/characters'
    });
  }
}

export default new CharacterService();
