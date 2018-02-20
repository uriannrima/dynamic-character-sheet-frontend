var ammunitionModule = require('./ammunition.module');

export const Weapon = function ({ name, attackBonus, damage, critical, range, type, notes, keyAbility, hasAmmunition }) {
  return {
    name,
    attackBonus,
    damage,
    critical,
    range,
    type,
    notes,
    hasAmmunition,
    keyAbility: keyAbility || "",
    ammunition: new ammunitionModule.Ammunition({

    })
  }
}
