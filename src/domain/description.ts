import Alignment from './alignment'
import { GenderType } from './enums/gender-type'

export class Description {
  name: string = '';
  player: string = '';
  race: string = '';
  alignment: Alignment = new Alignment();
  deity: string = '';
  age: number = 0;
  gender: GenderType = GenderType.NONE;
  height: number = 0;
  weight: number = 0;
  eyes: string = '';
  hair: string = '';
  skin: string = '';

  constructor (model?: Description | { name?: string, player?: string, race?: string, alignment?: Alignment, deity?: string, age?: number, gender: GenderType, height?: number, weight?: number, eyes?: string, hair?: string, skin?: string }) {
    Object.assign(this, model)
  }
}

export default Description
