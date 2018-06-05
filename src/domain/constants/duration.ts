import { Base } from './base'

export class Duration extends Base { }

export class Timed extends Duration {
  duration: string = '';

  constructor (model?: Timed | { name?: string, description?: string, duration?: string }) {
    super(model)
    Object.assign(this, model)
  }
}

export const All = [
  new Timed({
    name: 'Timed',
    description: 'Many durations are measured in rounds, minutes, hours, or other increments. When the time is up, the magic goes away and the spell ends. If a spell’s duration is variable, the duration is rolled secretly so the caster doesn’t know how long the spell will last.',
    duration: ''
  }),
  new Duration({
    name: 'Instantaneous',
    description: 'The spell energy comes and goes the instant the spell is cast, though the consequences might be long-lasting.'
  }),
  new Duration({
    name: 'Permanent',
    description: 'The energy remains as long as the effect does. This means the spell is vulnerable to dispel magic.'
  }),
  new Duration({
    name: 'Concentration',
    description: 'The spell lasts as long as you concentrate on it. Concentrating to maintain a spell is a standard action that does not provoke attacks of opportunity. Anything that could break your concentration when casting a spell can also break your concentration while you’re maintaining one, causing the spell to end.'
  }),
  new Duration({
    name: 'Subjects, Effects, and Areas',
    description: `If the spell affects creatures directly, the result travels with the subjects for the spell’s duration. If the spell creates an effect, the effect lasts for the duration. The effect might move or remain still. Such an effect can be destroyed prior to when its duration ends. If the spell affects an area, then the spell stays with that area for its duration.
        \nCreatures become subject to the spell when they enter the area and are no longer subject to it when they leave.`
  }),
  new Duration({
    name: 'Touch Spells and Holding the Charge',
    description: `In most cases, if you don’t discharge a touch spell on the round you cast it, you can hold the charge (postpone the discharge of the spell) indefinitely. You can make touch attacks round after round until the spell is discharged. If you cast another spell, the touch spell dissipates.
        \nSome touch spells allow you to touch multiple targets as part of the spell. You can’t hold the charge of such a spell; you must touch all targets of the spell in the same round that you finish casting the spell.`
  }),
  new Duration({
    name: 'Triggered/Discharged',
    description: `Occasionally a spells lasts for a set duration or until triggered or discharged.`
  }),
  new Duration({
    name: 'Dismissible',
    description: `If the duration line ends with “(D)” you can dismiss the spell at will. You must be within range of the spell’s effect and must speak words of dismissal, which are usually a modified form of the spell’s verbal component. If the spell has no verbal component, you can dismiss the effect with a gesture. Dismissing a spell is a standard action that does not provoke attacks of opportunity.
        \nA spell that depends on concentration is dismissible by its very nature, and dismissing it does not take an action, since all you have to do to end the spell is to stop concentrating on your turn.`
  })
]
