const SpellSchoolModule = require('./spell-school.module');

export const components = [{
    name: "Verbal",
    description: "A verbal component is a spoken incantation. To provide a verbal component, you must be able to speak in a strong voice. A silence spell or a gag spoils the incantation (and thus the spell). a spellcaster who has been deafened has a 20% chance of spoiling any spell with a verbal component that he tries to cast."
}, {
    name: "Somatic",
    description: "A somatic component is a measured and precise movement of the hand. You must have at least one hand free to provide a somatic component."
}, {
    name: "Material",
    description: "A material component consists of one or more physical substances or objects that are annihilated by the spell energies in the casting process. Unless a cost is given for a material component, the cost is negligible. Don’t bother to keep track of material components with negligible cost. Assume you have all you need as long as you have your spell component pouch."
}, {
    name: "Focus",
    description: "A focus component is a prop of some sort. Unlike a material component, a focus is not consumed when the spell is cast and can be reused. As with material components, the cost for a focus is negligible unless a price is given. Assume that focus components of negligible cost are in your spell component pouch."
}, {
    name: "Divine Focus",
    description: "A divine focus component is an item of spiritual significance. The divine focus for a cleric or a paladin is a holy symbol appropriate to the character’s faith. The divine focus for a druid or a ranger is a sprig of holly, or some other sacred plant. If the Components line includes F/ DF or M/ DF, the arcane version of the spell has a focus component or a material component (the abbreviation before the slash) and the divine version has a divine focus component (the abbreviation after the slash)."
}];

export const ranges = [{
    name: "Personal",
    description: "The spell affects only you."
}, {
    name: "Touch",
    description: "You must touch a creature or object to affect it. A touch spell that deals damage can score a critical hit just as a weapon can. A touch spell threatens a critical hit on a natural roll of 20 and deals double damage on a successful critical hit. Some touch spells allow you to touch multiple targets. You can touch up to 6 willing targets as part of the casting, but all targets of the spell must be touched in the same round that you finish casting the spell. If the spell allows you to touch targets over multiple rounds, touching 6 creatures is a full-round action."
}, {
    name: "Close",
    description: "The spell reaches as far as 25 units away from you. The maximum range increases by 5 units for every two full caster levels.",
    distance: "25 ft. + 5 ft./2 levels"
}, {
    name: "Medium",
    description: "The spell reaches as far as 100 units + 10 units per caster level.",
    distance: "100 ft. + 10 ft./level"
}, {
    name: "Long",
    description: "The spell reaches as far as 400 units + 40 units per caster level.",
    distance: "400 ft. + 40 ft./level"
}, {
    name: "Unlimited",
    description: "The spell reaches anywhere on the same plane of existence."
},
{
    name: "Miscellaneous",
    description: "Some spells have no standard range category, just a range expressed in distance."
}];

export const effects = [
    {
        name: "Ray",
        description: "Some effects are rays. You aim a ray as if using a ranged weapon, though typically you make a ranged touch attack rather than a normal ranged attack. As with a ranged weapon, you can fire into the dark or at an invisible creature and hope you hit something. You don’t have to see the creature you’re trying to hit, as you do with a targeted spell. Intervening creatures and obstacles, however, can block your line of sight or provide cover for the creature at which you’re aiming.           \nIf a ray spell has a duration, it’s the duration of the effect that the ray causes, not the length of time the ray itself persists.                \nIf a ray spell deals damage, you can score a critical hit just as if it were a weapon. A ray spell threatens a critical hit on a natural roll of 20 and deals double damage on a successful critical hit."
    },
    {
        name: "Spread",
        description: "Some effects, notably clouds and fogs, spread out from a point of origin, which must be a grid intersection. The effect can extend around corners and into areas that you can’t see. Figure distance by actual distance traveled, taking into account turns the spell effect takes. When determining distance for spread effects, count around walls, not through them. As with movement, do not trace diagonals across corners. You must designate the point of origin for such an effect, but you need not have line of effect (see below) to all portions of the effect."
    },
    {
        name: "Area",
        description: "Some spells affect an area. Sometimes a spell description specifies a specially defined area, but usually an area falls into one of the categories defined below. See more area of effect templates here.\nRegardless of the shape of the area, you select the point where the spell originates, but otherwise you don’t control which creatures or objects the spell affects. The point of origin of a spell is always a grid intersection. When determining whether a given creature is within the area of a spell, count out the distance from the point of origin in squares just as you do when moving a character or when determining the range for a ranged attack. The only difference is that instead of counting from the center of one square to the center of the next, you count from intersection to intersection.\nYou can count diagonally across a square, but remember that every second diagonal counts as 2 squares of distance. If the far edge of a square is within the spell’s area, anything within that square is within the spell’s area. If the spell’s area only touches the near edge of a square, however, anything within that square is unaffected by the spell.",
        types: [
            {
                name: "Burst",
                description: "A burst spell affects whatever it catches in its area, including creatures that you can’t see. It can’t affect creatures with total cover from its point of origin (in other words, its effects don’t extend around corners). The default shape for a burst effect is a sphere, but some burst spells are specifically described as cone-shaped. a burst’s area defines how far from the point of origin the spell’s effect extends."
            },
            {
                name: "Emanation",
                description: "An emanation spell functions like a burst spell, except that the effect continues to radiate from the point of origin for the duration of the spell. Most emanations are cones or spheres."
            },
            {
                name: "Spread",
                description: "A spread spell extends out like a burst but can turn corners. You select the point of origin, and the spell spreads out a given distance in all directions. Figure the area the spell effect fills by taking into account any turns the spell effect takes."
            }
        ],
        formats: [
            {
                name: "Cone",
                description: "A cone-shaped spell shoots away from you in a quarter-circle in the direction you designate. It starts from any corner of your square and widens out as it goes. Most cones are either bursts or emanations (see above), and thus won’t go around corners."
            },
            {
                name: "Cylinder",
                description: "When casting a cylinder-shaped spell, you select the spell’s point of origin. This point is the center of a horizontal circle, and the spell shoots down from the circle, filling a cylinder. A cylinder-shaped spell ignores any obstructions within its area."
            },
            {
                name: "Line",
                description: "A line-shaped spell shoots away from you in a line in the direction you designate. It starts from any corner of your square and extends to the limit of its range or until it strikes a barrier that blocks line of effect. A line-shaped spell affects all creatures in squares through which the line passes."
            },
            {
                name: "Sphere",
                description: "A sphere-shaped spell expands from its point of origin to fill a spherical area. Spheres may be bursts, emanations, or spreads."
            },
            {
                name: "Creatures",
                description: `A spell with this kind of area affects creatures directly (like a targeted spell), but it affects all creatures in an area of some kind rather than individual creatures you select. The area might be a spherical burst, a cone-shaped burst, or some other shape.
                \nMany spells affect “living creatures,” which means all creatures other than constructs and undead. Creatures in the spell’s area that are not of the appropriate type do not count against the creatures affected.`
            }, {
                name: "Objects",
                description: "A spell with this kind of area affects objects within an area you select (as Creatures, but affecting objects instead)."
            }, {
                name: "Other",
                description: "A spell can have a unique area, as defined in its description."
            }, {
                name: "Shapeable",
                description: "If an area or effect entry ends with “(S),” you can shape the spell. a shaped effect or area can have no dimension smaller than 10 unit. Many effects or areas are given as cubes to make it easy to model irregular shapes. Three-dimensional volumes are most often needed to define aerial or underwater effects and areas."
            }
        ]
    }
]

export const descriptors = [{
    name: "Acid",
    description: "Acid effects deal damage with chemical reactions rather than cold, electricity, heat, or vibration. This descriptor includes both actual acids and their chemical opposites, called bases or alkalines (such as ammonia and lye)."
}, {
    name: "Air",
    description: " Spells that create air, manipulate air, or conjure creatures from air-dominant planes or with the air subtype should have the air descriptor."
}, {
    name: "Chaotic",
    description: "Spells that draw upon the power of true chaos or conjure creatures from chaos-aligned planes or with the chaotic subtype should have the chaos descriptor."
}, {
    name: "Cold",
    description: "Cold effects deal damage by making the target colder, typically by blasting it with supernaturally cooled matter or energy. Cold effects also include those that create ice, sleet, or snow out of nothing. They can cause frostbite, numbness, coordination problems, slowed movement and reactions, stupor, and death."
}, {
    name: "Curse",
    description: "Curses are often permanent effects, and usually cannot be dispelled, but can be removed with a break enchantment, limited wish, miracle, remove curse, or wish."
}, {
    name: "Darkness",
    description: "Spells that create darkness or reduce the amount of light should have the darkness descriptor. Giving a spell the darkness descriptor indicates whether a spell like daylight is high enough level to counter or dispel it."
}, {
    name: "Death",
    description: "Spells with the death descriptor directly attack a creature’s life force to cause immediate death, or to draw on the power of a dead or dying creature. The death ward spell protects against death effects, and some creature types are immune to death effects."
}, {
    name: "Disease",
    description: "Disease effects give the target a disease, which may be an invading organism such as a bacteria or virus, an abnormal internal condition (such as a cancer or mental disorder), or a recurring magical effect that acts like one of the former. Creatures with resistance or immunity to disease apply that resistance to their saving throw and the effects of disease spells. "
}, {
    name: "Draconic",
    description: "The draconic descriptor is for spells tied closely to dragons that those with draconic blood can cast them almost instinctually. Spells with the draconic descriptor were created by dragons in ages long past, and still resonate within the blood of true dragons to this day.\nCreatures of the dragon type with 5 or more racial hit dice can select a draconic spell as a spell known regardless of the class spell list it’s on. Each time such a creature gains an additional racial hit die, it can select a draconic spell in place of an existing spell known of the same or higher spell level."
}, {
    name: "Earth",
    description: "Spells that manipulate earth or conjure creatures from earth-dominant planes or with the earth subtype should have the earth descriptor."
}, {
    name: "Electricity",
    description: "Electricity effects involve the presence and flow of electrical charge, whether expressed in amperes or volts. Electricity deals damage to creatures by disrupting their biological systems. It deals damage to objects (as well as creatures) by heating the material it passes through, and thus technically many electricity spells could also be treated as fire spells, but for sake of game simplicity, it is better to just let electricity-based spells deal electricity damage. Electricity effects may stun, paralyze, or even kill."
}, {
    name: "Emotion",
    description: "Spells with this descriptor create emotions or manipulate the target’s existing emotions. Most emotion spells are enchantments, except for fear spells, which are usually necromancy."
}, {
    name: "Evil",
    description: `Spells that draw upon evil powers or conjure creatures from evil-aligned planes or with the evil subtype should have the evil descriptor.\nCasting an evil spell is an evil act, but for most characters simply casting such a spell once isn’t enough to change her alignment; this only occurs if the spell is used for a truly abhorrent act, or if the caster established a pattern of casting evil spells over a long period. A wizard who uses animate dead to create guardians for defenseless people won’t turn evil, but he will if he does it over and over again. The GM decides whether the character’s alignment changes, but typically casting two evil spells is enough to turn a good creature nongood, and three or more evils spells move the caster from nongood to evil. The greater the amount of time between castings, the less likely alignment will change. Some spells require sacrificing a sentient creature, a major evil act that makes the caster evil in almost every circumstance.
    \nThose who are forbidden from casting spells with an opposed alignment might lose their divine abilities if they circumvent that restriction (via Use Magic Device, for example), depending on how strict their deities are.
    \nThough this advice talks about evil spells, it also applies to spells with other alignment descriptors.
    \nIn addition, you can move the target 5 units. This movement doesn’t provoke attacks of opportunity. A successful saving throw halves the damage and negates the movement.
    \nAn undead creature takes no damage. Instead, you manipulate the undead, forcing it to take an immediate action to either move up to its speed (provoking attacks of opportunity as normal) or make a single attack against a creature of your choice in its reach.
    \nEither of these is the most basic version of the action the creature can take (it doesn’t activate any special abilities that it could apply to the movement or attack, such as grab). A successful saving throw negates this effect. A mindless undead creature doesn’t receive a save against this effect.`
}, {
    name: "Fear",
    description: "Spells with the fear descriptor create, enhance, or manipulate fear. Most fear spells are necromancy spells, though some are enchantment spells."
}, {
    name: "Fire",
    description: "Fire effects make the target hotter by creating fire, directly heating the target with magic or friction. Lava, steam, and boiling water all deal fire damage. Fire effects can also cause confusion, dizziness, exhaustion, fatigue, nausea, unconsciousness, and death. Spells that manipulate fire or conjure creatures from fire-dominant planes or with the fire subtype should have the fire descriptor."
}, {
    name: "Force",
    description: "Spells with the force descriptor create or manipulate magical force. Force spells affect incorporeal creatures normally (as if they were corporeal creatures)."
}, {
    name: "Good",
    description: "Spells that draw upon the power of true goodness or conjure creatures from good-aligned planes or with the good subtype should have the good descriptor."
}, {
    name: "Language-Dependent",
    description: "A language-dependent spell uses intelligible language as a medium for communication. If the target cannot understand or hear what the caster of a language-dependent spell says, the spell has no effect, even if the target fails its saving throw."
}, {
    name: "Lawful",
    description: "Spells that draw upon the power of true law or conjure creatures from law-aligned planes or with the lawful subtype should have the law descriptor."
}, {
    name: "Light",
    description: "Spells that create significant amounts of light or attack darkness effects should have the light descriptor. Giving a spell the light descriptor indicates whether a spell like darkness is high enough level counter or dispel it."
}, {
    name: "Meditative",
    description: "Meditative spells fall into an unusual category and share the “meditative” descriptor. Meditative spells are not cast like other spells—they are cast during the period of the day when a spellcaster prepares her spells. A meditative spell must already be prepared at the time when you start your 1-hour spell preparation ritual, and at the end of that time, the meditative spell of your choosing is cast, leaving you with that one spell slot used for the remainder of the day. You can have only one meditative spell in effect on you at any one time. All meditative spells have a range of personal and a target of you, and they can’t be brewed into potions or part of similar one-use items like elixirs. A meditative spell can be placed on a scroll or in a wand, but the act of casting the spell must always be incorporated into the user’s spell-preparation time; it also takes 1 hour for a character who succeeds at an appropriate Use Magic Device check to operate such an item. "
}, {
    name: "Mind-Affecting",
    description: "Mindless creatures (those with an Intelligence score of “—”) and undead are immune to mind-affecting effects."
}, {
    name: "Pain",
    description: "Pain effects cause unpleasant sensations without any permanent physical damage (though a sensitive target may suffer mental repercussions from lengthy exposure to pain). Creatures that are immune to effects that require a Fort save (such as constructs and undead) are immune to pain effects."
}, {
    name: "Poison",
    description: "Poison effects use poison, venom, drugs, or similar toxic substances to disrupt and damage living creatures through chemical reactions. Technically, acids and poisons are both chemical reactions, but for the purpose of this game, they are categorized as different effects, with acids dealing hit point damage and poisons causing ability damage, ability drain, bleeding, confusion, convulsions, nausea, paralysis, reduced healing, suffocation, unconsciousness, or death. Creatures with resistance to poison (such as dwarves) apply that resistance to their saving throws and the effects of poison spells. Creatures with immunity are immune to poisonous aspects of poison spells, but not necessarily all effects of the spell (for example, a spell that creates a pit full of liquid poison could still trap or drown a poison-immune creature)."
}, {
    name: "Ruse",
    description: "The “ruse” descriptor applies to spells that appear to be other, usually more harmless spells in order for the caster to fool her opponents. Spells with the ruse descriptor are easily mistaken for other spells and are intended to confuse even onlookers trained in Spellcraft or Knowledge (arcana). Attempts to identify a ruse spell by its effects, its aura, its components, or other attributes with a skill check treat the spell as though it were a different spell, as indicated in the spell’s description. The one attempting the check can correctly identify the spell only by exceeding the DC by 10. The false spell is typically a level lower than the ruse spell, so skill checks use the DC for the lower-level spell. Even detect magic and most similar spells don’t prevent the caster from being fooled by a ruse spell. Analyze dweomer, greater arcane sight, and similar spells of the same or higher spell level that automatically identify spells reveal a ruse spell for what it is. Ruse spells that mimic harmless spells still list harmless on their saving throw or spell resistance lines; a creature that knows or suspects the true nature of the spell typically chooses to attempt the save."
}, {
    name: "Shadow",
    description: "Shadow spells manipulate matter or energy from the Shadow Plane, or allow transport to or from that plane."
}, {
    name: "Sonic",
    description: "Sonic effects transmit energy to the target through frequent oscillations of pressure through the air, water, or ground. Sounds that are too high or too low for the humanoid ear to detect can still transmit enough energy to cause harm, which means that these effects can even affect deafened creatures. Sound effects can cause hit point damage, deafness, dizziness, nausea, pain, shortness of breath, and temporary blindness, and can detect creatures using batlike echolocation."
}, {
    name: "Stone",
    description: `The [stone] descriptor is considered a subset of [earth] spells, and all spells with the [stone] descriptor are considered [earth] spells as well. Spells that have the [stone] designator do not deal spell damage, instead the damage they deal is treated as weapon damage. Thus, spell resistance is not effective against such spells and creatures immune to spells (such as many golems) are still affected by them. Because [stone] spells are considered to do weapon damage, they are affected by a creature’s Damage Reduction (if any). Each [stone] spell that does damage lists the effective material the spell is considered to be made of for purposes of penetrating DR. Despite the fact that cold iron is strongly tied to elemental stone, no magic spell can duplicate the effects of cold iron and thus [stone] spells never deal damage as a cold iron weapon. In all other regards, [stone] spells follow the normal rules for spells and spellcasting. Damaging [stone] spells do not penetrate an antimagic shell as the summoned rock winks out of existence when hitting the shell (much as summoned creatures do).
    \nWhile liquid acids are well known, and have ties to the elemental plane of water, there are also solid caustic materials with ties to the elemental plane of earth. These include items such as lye (also known as caustic soda, a dry white material used in soap-making) and caustic potash (also known as alkali salt). The exact process by which these caustic solids burn and corrode is not the same as many liquid acids, but the effect on material exposed to them is very similar.
    \nThus there are two elemental sources with which “acid” may be aligned. Black dragons, for example, are tied to the element of water and call forth a wet acidic breath that is also linked to that element. Sorcerers with an elemental earth bloodline, however, call upon the power of caustic salts and deal acid damage with a connection to elemental earth. Despite the two different elemental and alchemical sources of these caustic materials, for purposes of spells they both qualify as “acid” for game rule purposes.`
}, {
    name: "Water",
    description: "Spells that manipulate water or conjure creatures from water-dominant planes or with the water subtype should have the water descriptor."
}];

export const savingThrowResolve = [
    {
        name: "Negates",
        description: "The spell has no effect on a subject that makes a successful saving throw."
    }, {
        name: "Partial",
        description: "The spell has an effect on its subject. A successful saving throw means that some lesser effect occurs."
    }, {
        name: "Half",
        description: "The spell deals damage, and a successful saving throw halves the damage taken (round down)."
    }, {
        name: "Disbelief",
        description: "A successful save lets the subject ignore the spell’s effect."
    }, {
        name: "Object",
        description: "The spell can be cast on objects, which receive saving throws only if they are magical or if they are attended (held, worn, grasped, or the like) by a creature resisting the spell, in which case the object uses the creature’s saving throw bonus unless its own bonus is greater. This notation does not mean that a spell can be cast only on objects. Some spells of this sort can be cast on creatures or objects. A magic item’s saving throw bonuses are each equal to 2 + 1/2 the item’s caster level."
    }, {
        name: "Harmless",
        description: "The spell is usually beneficial, not harmful, but a targeted creature can attempt a saving throw if it desires."
    }
]

export const durations = [
    {
        name: "Timed",
        description: "Many durations are measured in rounds, minutes, hours, or other increments. When the time is up, the magic goes away and the spell ends. If a spell’s duration is variable, the duration is rolled secretly so the caster doesn’t know how long the spell will last.",
        duration: ""
    },
    {
        name: "Instantaneous",
        description: "The spell energy comes and goes the instant the spell is cast, though the consequences might be long-lasting."
    },
    {
        name: "Permanent",
        description: "The energy remains as long as the effect does. This means the spell is vulnerable to dispel magic."
    },
    {
        name: "Concentration",
        description: "The spell lasts as long as you concentrate on it. Concentrating to maintain a spell is a standard action that does not provoke attacks of opportunity. Anything that could break your concentration when casting a spell can also break your concentration while you’re maintaining one, causing the spell to end."
    },
    {
        name: "Subjects, Effects, and Areas",
        description: `If the spell affects creatures directly, the result travels with the subjects for the spell’s duration. If the spell creates an effect, the effect lasts for the duration. The effect might move or remain still. Such an effect can be destroyed prior to when its duration ends. If the spell affects an area, then the spell stays with that area for its duration.
        \nCreatures become subject to the spell when they enter the area and are no longer subject to it when they leave.`
    },
    {
        name: "Touch Spells and Holding the Charge",
        description: `In most cases, if you don’t discharge a touch spell on the round you cast it, you can hold the charge (postpone the discharge of the spell) indefinitely. You can make touch attacks round after round until the spell is discharged. If you cast another spell, the touch spell dissipates.
        \nSome touch spells allow you to touch multiple targets as part of the spell. You can’t hold the charge of such a spell; you must touch all targets of the spell in the same round that you finish casting the spell.`
    },
    {
        name: "Triggered/Discharged",
        description: `Occasionally a spells lasts for a set duration or until triggered or discharged.`
    },
    {
        name: "Dismissible",
        description: `If the duration line ends with “(D)” you can dismiss the spell at will. You must be within range of the spell’s effect and must speak words of dismissal, which are usually a modified form of the spell’s verbal component. If the spell has no verbal component, you can dismiss the effect with a gesture. Dismissing a spell is a standard action that does not provoke attacks of opportunity.
        \nA spell that depends on concentration is dismissible by its very nature, and dismissing it does not take an action, since all you have to do to end the spell is to stop concentrating on your turn.`
    }
];

export const castingTimes = [
    "Standard Action",
    "Round(s)",
    "Minute(s)",
    "Hour(s)",
    "Day(s)",
    "Custom"
];

export const Spell = function ({
    _id, name, school = new SpellSchoolModule.SpellSchool({}),
    descriptors = [], level = 0, components = [],
    castingTimeAmount = 1, castingTime = "Standard Action", range = ranges[0], targets = "", effect = "", durations = [],
    savingThrow = { check: "", resolve: "" }, description, spellResistance = true, aditionalInformation }) {
    return {
        _id,
        name,
        school,
        descriptors,
        level,
        components,
        castingTimeAmount,
        castingTime,
        range,
        targets,
        effect,
        durations,
        savingThrow,
        spellResistance,
        description,
        aditionalInformation
    }
}
