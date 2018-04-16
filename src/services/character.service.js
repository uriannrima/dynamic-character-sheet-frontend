import * as CharacterModule from 'domain/character.model';
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

  async sync(characterId, payload) {
    this.emit('sync', {
      characterId,
      payload
    });
  }

  async onSync(callback) {
    this.register('sync', callback);
  }
}

export default new CharacterService();
