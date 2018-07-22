export class ProtectiveItem {
  name: string = '';
  acBonus: number = 0;
  weight: number = 0;
  specialProperties: string = '';

  constructor(model?: ProtectiveItem | { name?: string, acBonus?: number, weight?: number, specialProperties?: string }) {
    if (model) {
      if (model.name) this.name = model.name;
      if (model.acBonus) this.acBonus = model.acBonus;
      if (model.weight) this.weight = model.weight;
      if (model.specialProperties) this.specialProperties = model.specialProperties;
    }
  }
}

export class Shield extends ProtectiveItem {
  checkPenalty: number = 0;
  spellFailure: number = 0;

  constructor(model?: Shield | {
  name?: string, acBonus?: number, checkPenalty?: number,
  spellFailure?: number, weight?: number, specialProperties?: string
  }) {
    super(model);
    if (model) {
      if (model.checkPenalty) this.checkPenalty = model.checkPenalty;
      if (model.spellFailure) this.spellFailure = model.spellFailure;
    }
  }
}

export class Armor extends Shield {
  type: string = '';
  maxDex: number = 0;
  speed: number = 0;

  constructor(model?: Armor | {
  name?: string, type?: string, acBonus?: number,
  maxDex?: number, checkPenalty?: number, spellFailure?: number,
  speed?: number, weight?: number, specialProperties?: string
  }) {
    super(model);
    if (model) {
      if (model.type) this.type = model.type;
      if (model.maxDex) this.maxDex = model.maxDex;
      if (model.speed) this.speed = model.speed;
    }
  }
}

export class Gear {
  armor: Armor = new Armor();
  shield: Shield = new Shield();
  protectiveItems: ProtectiveItem[] = [new ProtectiveItem(), new ProtectiveItem()];

  constructor(model?: Gear | { armor?: Armor, shield?: Shield, protectiveItems?: ProtectiveItem[] }) {
    if (model) {
      if (model.armor) this.armor = new Armor(model.armor);
      if (model.shield) this.shield = new Shield(model.shield);
      if (model.protectiveItems) this.protectiveItems = model.protectiveItems.map(item => new ProtectiveItem(item));
    }
  }
}

export default Gear
