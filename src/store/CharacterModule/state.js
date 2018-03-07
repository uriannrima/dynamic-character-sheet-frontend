import * as Size from '@Modules/size.module';
import { AbilityScore, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma } from '@Modules/ability-score.module';
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
  size: new Size.Size(Size.Medium),
  age: "",
  gender: "",
  height: "",
  weight: "",
  eyes: "",
  hair: "",
  skin: "",
  abilityScores: {
    strength: new AbilityScore(Strength),
    dexterity: new AbilityScore(Dexterity),
    constitution: new AbilityScore(Constitution),
    intelligence: new AbilityScore(Intelligence),
    wisdom: new AbilityScore(Wisdom),
    charisma: new AbilityScore(Charisma)
  },
  armorKeyAbilityScore: 'dexterity',
  armorClass: new ArmorClass(),
  status: new Status(),
  speed: "",
  damageReduction: "",
  gear: new Gear()
}
