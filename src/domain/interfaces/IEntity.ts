export interface IRevivable {
  _type: string;
}

export interface IEntity extends IRevivable {
  readonly _id: string;
}
