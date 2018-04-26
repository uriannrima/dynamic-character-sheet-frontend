export class Armor {
  constructor({ name = '', type = '', acBonus = 0, maxDex = 0, checkPenalty = 0, spellFailure = 0, speed = 0, weight = 0, specialProperties = '' } = {}) {
    Object.assign(this, { name, type, acBonus, maxDex, checkPenalty, spellFailure, speed, weight, specialProperties });
  }
};

export class Shield {
  constructor({ name = '', acBonus = 0, checkPenalty = 0, spellFailure = 0, weight = 0, specialProperties = '' } = {}) {
    Object.assign(this, { name, acBonus, checkPenalty, spellFailure, weight, specialProperties });
  }
}

export class ProtectiveItem {
  constructor({ name = '', acBonus = 0, weight = 0, specialProperties = '' } = {}) {
    Object.assign(this, { name, acBonus, weight, specialProperties });
  }
}

export class Gear {
  constructor() {
    Object.assign(this, {
      armor: new Armor(),
      shield: new Shield(),
      protectiveItems: [new ProtectiveItem(), new ProtectiveItem()]
    });
  }
}

export default Gear;
