export interface IRevivable {
  _type: string;
}

export interface IEntity<T = string> extends IRevivable {
  readonly _id: T;
}
