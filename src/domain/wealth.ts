export class Wealth {
  treasure: string = '';
  coins: Coins = new Coins();

  constructor (model?: Wealth | { treasure?: string, coins?: Coins }) {
    Object.assign(this, model)
  }
}

export default Wealth

export class Coins {
  [key: string]: Coin;
  copper: Coin = new Coin({ title: 'Cooper Coins', label: 'CP' });
  silver: Coin = new Coin({ title: 'Silver Coins', label: 'SP' });
  gold: Coin = new Coin({ title: 'Gold Coins', label: 'GP' });
  platinum: Coin = new Coin({ title: 'Platinum Coins', label: 'PP' });

  constructor (model?: Coins | { copper?: Coin, silver?: Coin, gold?: Coin, platinum?: Coin }) {
    Object.assign(this, model)
  }
}

export class Coin {
  title: string = '';
  label: string = '';
  value: number = 0;

  constructor (model?: Coin | { title?: string, label?: string, value?: number }) {
    Object.assign(this, model)
  }
}
