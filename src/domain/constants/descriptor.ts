import { Base } from './base';

export class Descriptor extends Base { }

export const All = [
  new Descriptor({
    name: 'Acid',
    description: 'Acid effects deal damage with chemical reactions rather than cold, electricity, heat, or vibration. This descriptor includes both actual acids and their chemical opposites, called bases or alkalines (such as ammonia and lye).'
  }),
  new Descriptor({
    name: 'Air',
    description: ' Spells that create air, manipulate air, or conjure creatures from air-dominant planes or with the air subtype should have the air descriptor.'
  }),
  new Descriptor({
    name: 'Chaotic',
    description: 'Spells that draw upon the power of true chaos or conjure creatures from chaos-aligned planes or with the chaotic subtype should have the chaos descriptor.'
  }),
  new Descriptor({
    name: 'Cold',
    description: 'Cold effects deal damage by making the target colder, typically by blasting it with supernaturally cooled matter or energy. Cold effects also include those that create ice, sleet, or snow out of nothing. They can cause frostbite, numbness, coordination problems, slowed movement and reactions, stupor, and death.'
  }),
  new Descriptor({
    name: 'Curse',
    description: 'Curses are often permanent effects, and usually cannot be dispelled, but can be removed with a break enchantment, limited wish, miracle, remove curse, or wish.'
  }),
  new Descriptor({
    name: 'Darkness',
    description: 'Spells that create darkness or reduce the amount of light should have the darkness descriptor. Giving a spell the darkness descriptor indicates whether a spell like daylight is high enough level to counter or dispel it.'
  }),
  new Descriptor({
    name: 'Death',
    description: 'Spells with the death descriptor directly attack a creature’s life force to cause immediate death, or to draw on the power of a dead or dying creature. The death ward spell protects against death effects, and some creature types are immune to death effects.'
  }),
  new Descriptor({
    name: 'Disease',
    description: 'Disease effects give the target a disease, which may be an invading organism such as a bacteria or virus, an abnormal internal condition (such as a cancer or mental disorder),     or a recurring magical effect that acts like one of the former.Creatures with resistance or immunity to disease apply that resistance to their saving throw and the effects of disease spells. '
  }),
  new Descriptor({
    name: 'Draconic',
    description: 'The draconic descriptor is for spells tied closely to dragons that those with draconic blood can cast them almost instinctually. Spells with the draconic descriptor were created by dragons in ages long past, and still resonate within the blood of true dragons to this day.\nCreatures of the dragon type with 5 or more racial hit dice can select a draconic spell as a spell known regardless of the class spell list it’s on. Each time such a creature gains an additional racial hit die, it can select a draconic spell in place of an existing spell known of the same or higher spell level.'
  }),
  new Descriptor({
    name: 'Earth',
    description: 'Spells that manipulate earth or conjure creatures from earth-dominant planes or with the earth subtype should have the earth descriptor.'
  }),
  new Descriptor({
    name: 'Electricity',
    description: 'Electricity effects involve the presence and flow of electrical charge, whether expressed in amperes or volts. Electricity deals damage to creatures by disrupting their biological systems. It deals damage to objects (as well as creatures) by heating the material it passes through, and thus technically many electricity spells could also be treated as fire spells, but for sake of game simplicity, it is better to just let electricity-based spells deal electricity damage. Electricity effects may stun, paralyze, or even kill.'
  }),
  new Descriptor({
    name: 'Emotion',
    description: 'Spells with this descriptor create emotions or manipulate the target’s existing emotions. Most emotion spells are enchantments, except for fear spells, which are usually necromancy.'
  }),
  new Descriptor({
    name: 'Evil',
    description: `Spells that draw upon evil powers or conjure creatures from evil-aligned planes or with the evil subtype should have the evil descriptor.\nCasting an evil spell is an evil act, but for most characters simply casting such a spell once isn’t enough to change her alignment; this only occurs if the spell is used for a truly abhorrent act, or if the caster established a pattern of casting evil spells over a long period. A wizard who uses animate dead to create guardians for defenseless people won’t turn evil, but he will if he does it over and over again. The GM decides whether the character’s alignment changes, but typically casting two evil spells is enough to turn a good creature nongood, and three or more evils spells move the caster from nongood to evil. The greater the amount of time between castings, the less likely alignment will change. Some spells require sacrificing a sentient creature, a major evil act that makes the caster evil in almost every circumstance.
    \nThose who are forbidden from casting spells with an opposed alignment might lose their divine abilities if they circumvent that restriction (via Use Magic Device, for example), 
    depending on how strict their deities are.
    \nThough this advice talks about evil spells, it also applies to spells with other alignment descriptors.
    \nIn addition, you can move the target 5 units. This movement doesn’t provoke attacks of opportunity. A successful saving throw halves the damage and negates the movement.
    \nAn undead creature takes no damage. Instead, you manipulate the undead, forcing it to take an immediate action to either move up to its speed (provoking attacks of opportunity as normal) or make a single attack against a creature of your choice in its reach.
    \nEither of these is the most basic version of the action the creature can take (it doesn’t activate any special abilities that it could apply to the movement or attack, such as grab). A successful saving throw negates this effect. A mindless undead creature doesn’t receive a save against this effect.`
  }),
  new Descriptor({
    name: 'Fear',
    description: 'Spells with the fear descriptor create, enhance, or manipulate fear. Most fear spells are necromancy spells, though some are enchantment spells.'
  }),
  new Descriptor({
    name: 'Fire',
    description: 'Fire effects make the target hotter by creating fire, directly heating the target with magic or friction. Lava, steam, and boiling water all deal fire damage. Fire effects can also cause confusion, dizziness, exhaustion, fatigue, nausea, unconsciousness, and death. Spells that manipulate fire or conjure creatures from fire-dominant planes or with the fire subtype should have the fire descriptor.'
  }),
  new Descriptor({
    name: 'Force',
    description: 'Spells with the force descriptor create or manipulate magical force. Force spells affect incorporeal creatures normally (as if they were corporeal creatures).'
  }),
  new Descriptor({
    name: 'Good',
    description: 'Spells that draw upon the power of true goodness or conjure creatures from good-aligned planes or with the good subtype should have the good descriptor.'
  }),
  new Descriptor({
    name: 'Language-Dependent',
    description: 'A language-dependent spell uses intelligible language as a medium for communication. If the target cannot understand or hear what the caster of a language-dependent spell says, the spell has no effect, even if the target fails its saving throw.'
  }),
  new Descriptor({
    name: 'Lawful',
    description: 'Spells that draw upon the power of true law or conjure creatures from law-aligned planes or with the lawful subtype should have the law descriptor.'
  }),
  new Descriptor({
    name: 'Light',
    description: 'Spells that create significant amounts of light or attack darkness effects should have the light descriptor. Giving a spell the light descriptor indicates whether a spell like darkness is high enough level counter or dispel it.'
  }),
  new Descriptor({
    name: 'Meditative',
    description: 'Meditative spells fall into an unusual category and share the “meditative” descriptor. Meditative spells are not cast like other spells—they are cast during the period of the day when a spellcaster prepares her spells. A meditative spell must already be prepared at the time when you start your 1-hour spell preparation ritual, and at the end of that time, the meditative spell of your choosing is cast, leaving you with that one spell slot used for the remainder of the day. You can have only one meditative spell in effect on you at any one time. All meditative spells have a range of personal and a target of you, and they can’t be brewed into potions or part of similar one-use items like elixirs. A meditative spell can be placed on a scroll or in a wand, but the act of casting the spell must always be incorporated into the user’s spell-preparation time; it also takes 1 hour for a character who succeeds at an appropriate Use Magic Device check to operate such an item. '
  }),
  new Descriptor({
    name: 'Mind-Affecting',
    description: 'Mindless creatures (those with an Intelligence score of “—”) and undead are immune to mind-affecting effects.'
  }),
  new Descriptor({
    name: 'Pain',
    description: 'Pain effects cause unpleasant sensations without any permanent physical damage (though a sensitive target may suffer mental repercussions from lengthy exposure to pain). Creatures that are immune to effects that require a Fort save (such as constructs and undead) are immune to pain effects.'
  }),
  new Descriptor({
    name: 'Poison',
    description: 'Poison effects use poison, venom, drugs, or similar toxic substances to disrupt and damage living creatures through chemical reactions. Technically, acids and poisons are both chemical reactions, but for the purpose of this game, they are categorized as different effects, with acids dealing hit point damage and poisons causing ability damage, ability drain, bleeding, confusion, convulsions, nausea, paralysis, reduced healing, suffocation, unconsciousness, or death. Creatures with resistance to poison (such as dwarves) apply that resistance to their saving throws and the effects of poison spells. Creatures with immunity are immune to poisonous aspects of poison spells, but not necessarily all effects of the spell (for example, a spell that creates a pit full of liquid poison could still trap or drown a poison-immune creature).'
  }),
  new Descriptor({
    name: 'Ruse',
    description: 'The “ruse” descriptor applies to spells that appear to be other, usually more harmless spells in order for the caster to fool her opponents. Spells with the ruse descriptor are easily mistaken for other spells and are intended to confuse even onlookers trained in Spellcraft or Knowledge (arcana). Attempts to identify a ruse spell by its effects, its aura, its components, or other attributes with a skill check treat the spell as though it were a different spell, as indicated in the spell’s description. The one attempting the check can correctly identify the spell only by exceeding the DC by 10. The false spell is typically a level lower than the ruse spell, so skill checks use the DC for the lower-level spell. Even detect magic and most similar spells don’t prevent the caster from being fooled by a ruse spell. Analyze dweomer, greater arcane sight, and similar spells of the same or higher spell level that automatically identify spells reveal a ruse spell for what it is. Ruse spells that mimic harmless spells still list harmless on their saving throw or spell resistance lines; a creature that knows or suspects the true nature of the spell typically chooses to attempt the save.'
  }),
  new Descriptor({
    name: 'Shadow',
    description: 'Shadow spells manipulate matter or energy from the Shadow Plane, or allow transport to or from that plane.'
  }),
  new Descriptor({
    name: 'Sonic',
    description: 'Sonic effects transmit energy to the target through frequent oscillations of pressure through the air, water, or ground. Sounds that are too high or too low for the humanoid ear to detect can still transmit enough energy to cause harm, which means that these effects can even affect deafened creatures. Sound effects can cause hit point damage, deafness, dizziness, nausea, pain, shortness of breath, and temporary blindness, and can detect creatures using batlike echolocation.'
  }),
  new Descriptor({
    name: 'Stone',
    description: `The [stone] descriptor is considered a subset of [earth] spells, and all spells with the [stone] descriptor are considered [earth] spells as well. Spells that have the [stone] designator do not deal spell damage, instead the damage they deal is treated as weapon damage. Thus, spell resistance is not effective against such spells and creatures immune to spells (such as many golems) are still affected by them. Because [stone] spells are considered to do weapon damage, they are affected by a creature’s Damage Reduction (if any). Each [stone] spell that does damage lists the effective material the spell is considered to be made of for purposes of penetrating DR. Despite the fact that cold iron is strongly tied to elemental stone, no magic spell can duplicate the effects of cold iron and thus [stone] spells never deal damage as a cold iron weapon. In all other regards, [stone] spells follow the normal rules for spells and spellcasting. Damaging [stone] spells do not penetrate an antimagic shell as the summoned rock winks out of existence when hitting the shell (much as summoned creatures do).
    \nWhile liquid acids are well known, and have ties to the elemental plane of water, there are also solid caustic materials with ties to the elemental plane of earth. These include items such as lye (also known as caustic soda, a dry white material used in soap-making) and caustic potash (also known as alkali salt). The exact process by which these caustic solids burn and corrode is not the same as many liquid acids, but the effect on material exposed to them is very similar.
    \nThus there are two elemental sources with which “acid” may be aligned. Black dragons, for example, are tied to the element of water and call forth a wet acidic breath that is also linked to that element. Sorcerers with an elemental earth bloodline, however, call upon the power of caustic salts and deal acid damage with a connection to elemental earth. Despite the two different elemental and alchemical sources of these caustic materials, for purposes of spells they both qualify as “acid” for game rule purposes.`
  }),
  new Descriptor({
    name: 'Water',
    description: 'Spells that manipulate water or conjure creatures from water-dominant planes or with the water subtype should have the water descriptor.'
  })
];
