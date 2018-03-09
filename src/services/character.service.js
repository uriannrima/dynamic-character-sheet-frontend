import * as CharacterModule from 'modules/character.module';
import AbstractService from './abstract.service';

class CharacterService extends AbstractService {
  constructor() {
    super({
      model: CharacterModule.Character,
      url: '/characters'
    });
  }

  async connect(characterId) {
    this.emit('connect', characterId);
  }

  async disconnect() {
    this.emit('disconnect');
  }
}

export default new CharacterService();
