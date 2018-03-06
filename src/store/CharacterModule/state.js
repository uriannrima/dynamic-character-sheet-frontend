import * as Size from '@Modules/size.module';
import { Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma } from '@Modules/ability-score.module';
import Status from '@Modules/status.module';
import ArmorClass from '@Modules/armor-class.module';
import Gear from '@Modules/gear.module';

export default {
  _id: null,
  name: "",
  playerName: "",
  classes: [],
  race: "",
  alignment: "",
  deity: "",
  size: Size.Medium,
  age: "",
  gender: "",
  height: "",
  weight: "",
  eyes: "",
  hair: "",
  skin: "",
  abilityScores: {
    strength: Strength,
    dexterity: Dexterity,
    constitution: Constitution,
    intelligence: Intelligence,
    wisdom: Wisdom,
    charisma: Charisma
  },
  armorKeyAbilityScore: 'dexterity',
  armorClass: new ArmorClass(),
  status: new Status(),
  speed: "",
  damageReduction: 0,
  gear: new Gear()
}
