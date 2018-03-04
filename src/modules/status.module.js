export class Status {
  constructor({ healthPoints = 1, wounds = "", nonLethalDamage = 0 }) {
    Object.assign(this, {
      healthPoints,
      wounds,
      nonLethalDamage
    });
  }
}

export default Status;
