import Alignment from '@/domain/alignment'
import { GenderType } from '@/domain/enums/gender-type'

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

  constructor(model?: Description | {
  name?: string, player?: string, race?: string,
  alignment?: Alignment, deity?: string, age?: number,
  gender: GenderType, height?: number, weight?: number,
  eyes?: string, hair?: string, skin?: string
  }) {
    if (model) {
      if (model.name) this.name = model.name;
      if (model.player) this.player = model.player;
      if (model.race) this.race = model.race;
      if (model.alignment) this.alignment = new Alignment(model.alignment);
      if (model.deity) this.deity = model.deity;
      if (model.age) this.age = model.age;
      if (model.gender) this.gender = model.gender;
      if (model.height) this.height = model.height;
      if (model.weight) this.weight = model.weight;
      if (model.eyes) this.eyes = model.eyes;
      if (model.hair) this.hair = model.hair;
      if (model.skin) this.skin = model.skin;
    }
  }
}

export default Description
