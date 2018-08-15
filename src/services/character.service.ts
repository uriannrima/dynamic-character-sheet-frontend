import { Character } from '@domain/character'
import AbstractService from './abstract.service'

console.debug(Character);

class CharacterService extends AbstractService<Character> {
  constructor() {
    super({ url: '/characters', constructors: [Character] })
  }

  async connect(characterId: string) {
    this.service.emit('connect', characterId)
  }

  async disconnect() {
    this.service.emit('disconnect')
  }

  async sync(characterId: string, payload?: any) {
    this.service.emit('sync', {
      characterId,
      payload
    })
  }

  async onSync(callback: (...args: any[]) => void) {
    this.service.register('sync', callback)
  }
}

export default new CharacterService()
