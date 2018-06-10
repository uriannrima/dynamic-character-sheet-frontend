import { Base } from './base'

export class Resolve extends Base { }

export const All = [
  new Resolve({
    name: 'Negates',
    description: 'The spell has no effect on a subject that makes a successful saving throw.'
  }),
  new Resolve({
    name: 'Partial',
    description: 'The spell has an effect on its subject. A successful saving throw means that some lesser effect occurs.'
  }),
  new Resolve({
    name: 'Half',
    description: 'The spell deals damage, and a successful saving throw halves the damage taken (round down).'
  }),
  new Resolve({
    name: 'Disbelief',
    description: 'A successful save lets the subject ignore the spell’s effect.'
  }),
  new Resolve({
    name: 'Object',
    description: 'The spell can be cast on objects, which receive saving throws only if they are magical or if they are attended (held, worn, grasped, or the like) by a creature resisting the spell, in which case the object uses the creature’s saving throw bonus unless its own bonus is greater. This notation does not mean that a spell can be cast only on objects. Some spells of this sort can be cast on creatures or objects. A magic item’s saving throw bonuses are each equal to 2 + 1/2 the item’s caster level.'
  }),
  new Resolve({
    name: 'Harmless',
    description: 'The spell is usually beneficial, not harmful, but a targeted creature can attempt a saving throw if it desires.'
  })
]
