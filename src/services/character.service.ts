import { Character } from 'domain/character';
import AbstractService from './abstract.service';

class CharacterService extends AbstractService<Character> {
  constructor() {
    super({ url: '/characters' });
  }

  async connect(characterId: string) {
    this.emit('connect', characterId);
  }

  async disconnect() {
    this.emit('disconnect');
  }

  async sync(characterId: string, payload?: any) {
    this.emit('sync', {
      characterId,
      payload
    });
  }

  async onSync(callback: (...args: any[]) => void) {
    this.register('sync', callback);
  }
}

export default new CharacterService();
