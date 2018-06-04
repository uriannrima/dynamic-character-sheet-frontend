import { Base } from './base';

export class Range extends Base { }

export const ranges = [{
  name: 'Personal',
  description: 'The spell affects only you.'
}, {
  name: 'Touch',
  description: 'You must touch a creature or object to affect it. A touch spell that deals damage can score a critical hit just as a weapon can. A touch spell threatens a critical hit on a natural roll of 20 and deals double damage on a successful critical hit. Some touch spells allow you to touch multiple targets. You can touch up to 6 willing targets as part of the casting, but all targets of the spell must be touched in the same round that you finish casting the spell. If the spell allows you to touch targets over multiple rounds, touching 6 creatures is a full-round action.'
}, {
  name: 'Close',
  description: 'The spell reaches as far as 25 units away from you. The maximum range increases by 5 units for every two full caster levels.',
  distance: '25 ft. + 5 ft./2 levels'
}, {
  name: 'Medium',
  description: 'The spell reaches as far as 100 units + 10 units per caster level.',
  distance: '100 ft. + 10 ft./level'
}, {
  name: 'Long',
  description: 'The spell reaches as far as 400 units + 40 units per caster level.',
  distance: '400 ft. + 40 ft./level'
}, {
  name: 'Unlimited',
  description: 'The spell reaches anywhere on the same plane of existence.'
},
{
  name: 'Miscellaneous',
  description: 'Some spells have no standard range category, just a range expressed in distance.'
}];