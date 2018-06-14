export class Ammunition {
  name: string = '';
  quantity: number = 0;
  notes: string = '';

  constructor(model?: Ammunition | { name?: string, quantity?: number, notes?: string }) {
    if (model) {
      if (model.name) this.name = model.name;
      if (model.quantity) this.quantity = model.quantity;
      if (model.notes) this.notes = model.notes;
    }
  }
}

export default Ammunition
