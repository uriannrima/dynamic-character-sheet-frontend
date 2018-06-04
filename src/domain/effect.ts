import { Base } from "./base";

export class Effect extends Base { }

export const effects = [
  {
    name: 'Ray',
    description: 'Some effects are rays. You aim a ray as if using a ranged weapon, though typically you make a ranged touch attack rather than a normal ranged attack. As with a ranged weapon, you can fire into the dark or at an invisible creature and hope you hit something. You don’t have to see the creature you’re trying to hit, as you do with a targeted spell. Intervening creatures and obstacles, however, can block your line of sight or provide cover for the creature at which you’re aiming.           \nIf a ray spell has a duration, it’s the duration of the effect that the ray causes, not the length of time the ray itself persists.                \nIf a ray spell deals damage, you can score a critical hit just as if it were a weapon. A ray spell threatens a critical hit on a natural roll of 20 and deals double damage on a successful critical hit.'
  },
  {
    name: 'Spread',
    description: 'Some effects, notably clouds and fogs, spread out from a point of origin, which must be a grid intersection. The effect can extend around corners and into areas that you can’t see. Figure distance by actual distance traveled, taking into account turns the spell effect takes. When determining distance for spread effects, count around walls, not through them. As with movement, do not trace diagonals across corners. You must designate the point of origin for such an effect, but you need not have line of effect (see below) to all portions of the effect.'
  },
  {
    name: 'Area',
    description: 'Some spells affect an area. Sometimes a spell description specifies a specially defined area, but usually an area falls into one of the categories defined below. See more area of effect templates here.\nRegardless of the shape of the area, you select the point where the spell originates, but otherwise you don’t control which creatures or objects the spell affects. The point of origin of a spell is always a grid intersection. When determining whether a given creature is within the area of a spell, count out the distance from the point of origin in squares just as you do when moving a character or when determining the range for a ranged attack. The only difference is that instead of counting from the center of one square to the center of the next, you count from intersection to intersection.\nYou can count diagonally across a square, but remember that every second diagonal counts as 2 squares of distance. If the far edge of a square is within the spell’s area, anything within that square is within the spell’s area. If the spell’s area only touches the near edge of a square, however, anything within that square is unaffected by the spell.',
    types: [
      {
        name: 'Burst',
        description: 'A burst spell affects whatever it catches in its area, including creatures that you can’t see. It can’t affect creatures with total cover from its point of origin (in other words, its effects don’t extend around corners). The default shape for a burst effect is a sphere, but some burst spells are specifically described as cone-shaped. a burst’s area defines how far from the point of origin the spell’s effect extends.'
      },
      {
        name: 'Emanation',
        description: 'An emanation spell functions like a burst spell, except that the effect continues to radiate from the point of origin for the duration of the spell. Most emanations are cones or spheres.'
      },
      {
        name: 'Spread',
        description: 'A spread spell extends out like a burst but can turn corners. You select the point of origin, and the spell spreads out a given distance in all directions. Figure the area the spell effect fills by taking into account any turns the spell effect takes.'
      }
    ],
    formats: [
      {
        name: 'Cone',
        description: 'A cone-shaped spell shoots away from you in a quarter-circle in the direction you designate. It starts from any corner of your square and widens out as it goes. Most cones are either bursts or emanations (see above), and thus won’t go around corners.'
      },
      {
        name: 'Cylinder',
        description: 'When casting a cylinder-shaped spell, you select the spell’s point of origin. This point is the center of a horizontal circle, and the spell shoots down from the circle, filling a cylinder. A cylinder-shaped spell ignores any obstructions within its area.'
      },
      {
        name: 'Line',
        description: 'A line-shaped spell shoots away from you in a line in the direction you designate. It starts from any corner of your square and extends to the limit of its range or until it strikes a barrier that blocks line of effect. A line-shaped spell affects all creatures in squares through which the line passes.'
      },
      {
        name: 'Sphere',
        description: 'A sphere-shaped spell expands from its point of origin to fill a spherical area. Spheres may be bursts, emanations, or spreads.'
      },
      {
        name: 'Creatures',
        description: `A spell with this kind of area affects creatures directly (like a targeted spell), but it affects all creatures in an area of some kind rather than individual creatures you select. The area might be a spherical burst, a cone-shaped burst, or some other shape.
                \nMany spells affect “living creatures,” which means all creatures other than constructs and undead. Creatures in the spell’s area that are not of the appropriate type do not count against the creatures affected.`
      }, {
        name: 'Objects',
        description: 'A spell with this kind of area affects objects within an area you select (as Creatures, but affecting objects instead).'
      }, {
        name: 'Other',
        description: 'A spell can have a unique area, as defined in its description.'
      }, {
        name: 'Shapeable',
        description: 'If an area or effect entry ends with “(S),” you can shape the spell. a shaped effect or area can have no dimension smaller than 10 unit. Many effects or areas are given as cubes to make it easy to model irregular shapes. Three-dimensional volumes are most often needed to define aerial or underwater effects and areas.'
      }
    ]
  }
]