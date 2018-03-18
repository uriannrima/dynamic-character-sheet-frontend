export class Wealth {
  constructor({ copper, silver, gold, platinum, treasure } = {}) {
    Object.assign(this, {
      copper,
      silver,
      gold,
      platinum,
      treasure
    });
  }
}

export default Wealth;