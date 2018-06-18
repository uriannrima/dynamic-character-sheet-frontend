export class Wealth {
  treasure: string = '';
  coins: Coins = new Coins();

  constructor(model?: Wealth | { treasure?: string, coins?: Coins }) {
    if (model) {
      if (model.treasure) this.treasure = model.treasure;
      if (model.coins) this.coins = new Coins(model.coins);
    }
  }
}

export default Wealth

export class Coins {
  [key: string]: Coin;
  copper: Coin = new Coin({ title: 'Cooper Coins', label: 'CP' });
  silver: Coin = new Coin({ title: 'Silver Coins', label: 'SP' });
  gold: Coin = new Coin({ title: 'Gold Coins', label: 'GP' });
  platinum: Coin = new Coin({ title: 'Platinum Coins', label: 'PP' });

  constructor(model?: Coins | { copper?: Coin, silver?: Coin, gold?: Coin, platinum?: Coin }) {
    if (model) {
      if (model.copper) this.copper = new Coin(model.copper)
      if (model.silver) this.silver = new Coin(model.silver)
      if (model.gold) this.gold = new Coin(model.gold)
      if (model.platinum) this.platinum = new Coin(model.platinum)
    }
  }
}

export class Coin {
  title: string = '';
  label: string = '';
  value: number = 0;

  constructor(model?: Coin | { title?: string, label?: string, value?: number }) {
    if (model) {
      if (model.title) this.title = model.title;
      if (model.label) this.label = model.label;
      if (model.value) this.value = model.value;
    }
  }
}
