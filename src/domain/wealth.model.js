export class Wealth {
  constructor({ treasure = '' } = {}) {
    Object.assign(this, {
      coins: {
        copper: new Coin({ title: 'Cooper Coins', label: 'CP' }),
        silver: new Coin({ title: 'Silver Coins', label: 'SP' }),
        gold: new Coin({ title: 'Gold Coins', label: 'GP' }),
        platinum: new Coin({ title: 'Platinum Coins', label: 'PP' })
      },
      treasure
    });
  }
}

export class Coin {
  constructor({ title = '', label = '', value = 0 } = {}) {
    Object.assign(this, {
      title,
      label,
      value
    });
  }
}

export default Wealth;
