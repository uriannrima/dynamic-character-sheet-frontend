export interface IMap<T> {
  [key: string]: T;
}

export class MapUtil {
  static toArray<T>(map: IMap<T>) {
    var array: T[] = [];
    for (const key in map) {
      array.push(map[key]);
    }
    return array;
  }
}
