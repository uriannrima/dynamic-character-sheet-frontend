export class Item {
  name: string = '';
  page: string = '';
  weight: number = 0;

  constructor(model?: Item | { name?: string, page?: string, weight?: number }) {
    if (model) {
      if (model.name) this.name = model.name;
      if (model.page) this.page = model.page;
      if (model.weight) this.weight = model.weight;
    }
  }
}

export default Item
