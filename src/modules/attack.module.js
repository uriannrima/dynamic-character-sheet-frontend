// var ammunitionModule = require('./ammunition.module');

export class Attack {
  constructor({ name = "", attackBonus = "", damage = "", critical = "", range = "", type = "", notes = "", keyAbility = "", hasAmmunition = false } = {}) {
    Object.assign(this,
      {
        name,
        attackBonus,
        damage, critical,
        range,
        type,
        notes,
        keyAbility,
        hasAmmunition
      });
  }
}

export default Attack;