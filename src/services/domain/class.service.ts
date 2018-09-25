const BAB_BASE = {
  FULL: 1,
  PARTIAL: 0.75,
  HALF: 0.5
}
const ALL_CLASSES = [
  {
    name: 'Barbarian',
    babPerLevel: BAB_BASE.FULL,
    skillsPerLevel: 4,
    hitDice: 12
  },
  {
    name: 'Bard',
    babPerLevel: BAB_BASE.PARTIAL,
    skillsPerLevel: 6,
    hitDice: 6
  },
  {
    name: 'Cleric',
    babPerLevel: BAB_BASE.PARTIAL,
    skillsPerLevel: 2,
    hitDice: 8
  },
  {
    name: 'Fighter',
    babPerLevel: BAB_BASE.FULL,
    skillsPerLevel: 2,
    hitDice: 10
  },
  {
    name: 'Monk',
    babPerLevel: BAB_BASE.PARTIAL,
    skillsPerLevel: 4,
    hitDice: 8
  },
  {
    name: 'Paladin',
    babPerLevel: BAB_BASE.FULL,
    skillsPerLevel: 2,
    hitDice: 10
  },
  {
    name: 'Ranger',
    babPerLevel: BAB_BASE.FULL,
    skillsPerLevel: 6,
    hitDice: 8
  },
  {
    name: 'Rogue',
    babPerLevel: BAB_BASE.PARTIAL,
    skillsPerLevel: 8,
    hitDice: 6
  },
  {
    name: 'Sorcerer',
    babPerLevel: BAB_BASE.HALF,
    skillsPerLevel: 2,
    hitDice: 4
  },
  {
    name: 'Wizard',
    babPerLevel: BAB_BASE.HALF,
    skillsPerLevel: 2,
    hitDice: 4
  }
]

export default {
  get: function () {
    return ALL_CLASSES
  },
  getByName: function () {

  }
}
