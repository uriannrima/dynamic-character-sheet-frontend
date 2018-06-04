import { Base } from './base';

export class Component extends Base { }

export const All = [
  new Component({
    name: 'Verbal',
    description: 'A verbal component is a spoken incantation. To provide a verbal component, you must be able to speak in a strong voice. A silence spell or a gag spoils the incantation (and thus the spell). a spellcaster who has been deafened has a 20% chance of spoiling any spell with a verbal component that he tries to cast.'
  }),
  new Component({
    name: 'Somatic',
    description: 'A somatic component is a measured and precise movement of the hand. You must have at least one hand free to provide a somatic component.'
  }),
  new Component({
    name: 'Material',
    description: 'A material component consists of one or more physical substances or objects that are annihilated by the spell energies in the casting process. Unless a cost is given for a material component, the cost is negligible. Don’t bother to keep track of material components with negligible cost. Assume you have all you need as long as you have your spell component pouch.'
  }),
  new Component({
    name: 'Focus',
    description: 'A focus component is a prop of some sort. Unlike a material component, a focus is not consumed when the spell is cast and can be reused. As with material components, the cost for a focus is negligible unless a price is given. Assume that focus components of negligible cost are in your spell component pouch.'
  }),
  new Component({
    name: 'Divine Focus',
    description: 'A divine focus component is an item of spiritual significance. The divine focus for a cleric or a paladin is a holy symbol appropriate to the character’s faith. The divine focus for a druid or a ranger is a sprig of holly, or some other sacred plant. If the Components line includes F/ DF or M/ DF, the arcane version of the spell has a focus component or a material component (the abbreviation before the slash) and the divine version has a divine focus component (the abbreviation after the slash).'
  })
];
