export class Item {
  constructor({ name = "", page = "", weight = 0 } = {}) {
    Object.assign(this, {
      name, page, weight
    });
  }
}

export default Item;