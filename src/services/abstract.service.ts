import BaseSocketService from 'shared/services/bases/BaseSocketService'
import { IEntity } from '@/domain/interfaces/IEntity'

export default abstract class AbstractService<TModel extends IEntity> extends BaseSocketService<TModel> {
  constructor ({ url }: { url: string }) {
    super({ url })
  }

  async create (model?: any) {
    return model as TModel
  }

  async getById (_id: string, query: any = {}) {
    return super.get(_id, query)
  }

  async getAll (query = {}) {
    return super.find(query)
  }

  async saveOrUpdate (model: TModel) {
    const { _id } = model
    if (_id) {
      return super.update(model)
    } else {
      return super.create(model)
    }
  }

  async remove (_id: string) {
    return super.remove(_id)
  }

  async patch (_id: string, model: TModel) {
    return super.patch(_id, model)
  }
}
