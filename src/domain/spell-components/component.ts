import { Base } from './base'
import { IEntity } from '@/domain/interfaces/IEntity';

export class Component extends Base implements IEntity {
  public _id: string = '';
  public _type: string = 'Component';
}
