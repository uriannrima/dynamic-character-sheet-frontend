export enum ItemSlot {
  NONE = 'None',
  HEAD = 'Head',
  SHOULDERS = 'Shoulders',
  TORSO = 'Torso',
  ARMS = 'Arms',
  FINGERS = 'Fingers',
  FEET = 'Feet',
  WAIST = 'Waist',
  HANDS = 'Hands',
  BODY = 'Body',
  NECK = 'Neck',
  FACE = 'Face',
  WEAPON = 'Weapon'
}

export class Item {
  name: string = '';
  type: string = '';
  special?: string = '';
  weight: number = 0;
  quantity: number = 0;
  cost: number = 0;
  slot: ItemSlot = ItemSlot.NONE;

  constructor(model?: Item | { name?: string, type?: string, special?: string, weight?: number, quantity?: number, cost?: number, slot?: ItemSlot }) {
    if (model) {
      if (model.name) this.name = model.name;
      if (model.type) this.type = model.type;
      if (model.special) this.special = model.special;
      if (model.weight) this.weight = model.weight;
      if (model.quantity) this.quantity = model.quantity;
      if (model.cost) this.cost = model.cost;
      if (model.slot) this.slot = model.slot;
    }
  }
}

export default Item
