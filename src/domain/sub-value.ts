export class SubValue {
  title: string = '';
  value: string = '';

  constructor(model?: SubValue | { title?: string, value?: string }) {
    if (model) {
      if (model.title) this.title = model.title;
      if (model.value) this.value = model.value;
    }
  }
}

export default SubValue
