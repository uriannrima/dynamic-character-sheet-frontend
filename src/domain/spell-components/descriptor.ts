import { Base } from './base'
import { IEntity } from '@/domain/interfaces/IEntity';

export class Descriptor extends Base implements IEntity {
  _id: string = '';
  _type: string = 'Descriptor';
}

export default Descriptor;
