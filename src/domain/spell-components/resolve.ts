import { Base } from './base'
import { IEntity } from '@domain/interfaces/IEntity';

export class Resolve extends Base implements IEntity {
  _id: string = '';
  _type: string = 'Resolve';
}
