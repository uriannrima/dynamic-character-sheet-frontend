import * as Size from 'Modules/size.module';
import { Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma } from 'Modules/ability-score.module';

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
  armorClass: {
    base: 10,
    naturalArmor: 0,
    miscModifier: 0
  }
}
