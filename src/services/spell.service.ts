import { Spell } from 'domain/spell'
import { All as Descriptors } from 'domain/constants/descriptor'
import { All as Components } from 'domain/constants/component'
import { All as Ranges } from 'domain/constants/range'
import { All as Effects } from 'domain/constants/effect'
import { All as Durations } from 'domain/constants/duration'
import { All as Resolves } from 'domain/constants/resolve'
import { CastingTime } from 'domain/enums/casting-time-type'
import AbstractService from './abstract.service'

class SpellService extends AbstractService<Spell> {
  constructor () {
    super({ url: '/spells' })
  }

  async getAllDescriptors () {
    return Descriptors
  }

  async getAllComponents () {
    return Components
  }

  async getAllCastingTimes () {
    return CastingTime
  }

  async getAllRanges () {
    return Ranges
  }

  async getAllEffects () {
    return Effects
  }

  async getAllDurations () {
    return Durations
  }

  async getAllSavingThrowResolve () {
    return Resolves
  }
}

export default new SpellService()
