export class SubValue {
  title: string = '';
  value: string = '';

  constructor (model?: SubValue | { title?: string, value?: string }) {
    Object.assign(this, model)
  }
}

export default SubValue
