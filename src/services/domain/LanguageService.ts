import { Language } from '@/domain/language'
import AbstractService from '@/services/domain/AbstractService'

class LanguageService extends AbstractService<Language> {
  constructor () {
    super({ url: '/languages' })
  }
}

export default new LanguageService()
