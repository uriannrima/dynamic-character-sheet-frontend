export class Armor {
  name: string = '';
  type: string = '';
  acBonus: number = 0;
  maxDex: number = 0;
  checkPenalty: number = 0;
  spellFailure: number = 0;
  speed: number = 0;
  weight: number = 0;
  specialProperties: string = '';

  constructor(model?: Armor | { name?: string, type?: string, acBonus?: number, maxDex?: number, checkPenalty?: number, spellFailure?: number, speed?: number, weight?: number, specialProperties?: string }) {
    Object.assign(this, model);
  }
}

export class Shield {
  name: string = '';
  acBonus: number = 0;
  checkPenalty: number = 0;
  spellFailure: number = 0;
  weight: number = 0;
  specialProperties: string = '';

  constructor(model?: Shield | { name?: string, acBonus?: number, checkPenalty?: number, spellFailure?: number, weight?: number, specialProperties?: string }) {
    Object.assign(this, model);
  }
}

export class ProtectiveItem {
  name: string = '';
  acBonus: number = 0;
  weight: number = 0;
  specialProperties: string = '';

  constructor(model?: ProtectiveItem | { name?: string, acBonus?: number, weight?: number, specialProperties?: string }) {
    Object.assign(this, model);
  }
}

export class Gear {
  armor: Armor = new Armor();
  shield: Shield = new Shield();
  protectiveItems: ProtectiveItem[] = [new ProtectiveItem(), new ProtectiveItem()];

  constructor(model?: Gear | { armor?: Armor, shield?: Shield, protectiveItems?: ProtectiveItem[] }) {
    Object.assign(this, model);
  }
}

export default Gear;
