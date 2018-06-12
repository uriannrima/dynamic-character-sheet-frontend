import { Character } from 'domain/character'
import AbstractService from './abstract.service'

class CharacterService extends AbstractService<Character> {
  constructor() {
    super({ url: '/characters' })
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
