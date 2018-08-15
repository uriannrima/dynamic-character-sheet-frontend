import { IRevivable } from '@domain/interfaces/IEntity';

export interface IConstructor<T> {
  new(...args: any[]): T
}

export interface ClassMap {
  [type: string]: IConstructor<IRevivable>
}

export class MappingService {
  private static ClassMappings: ClassMap = {};

  public static addClassMaps(constructors?: Array<IConstructor<IRevivable>>) {
    constructors && constructors.forEach(constructor => MappingService.addClassMap(constructor))
  }

  public static addClassMap(constructor: IConstructor<IRevivable>) {
    MappingService.ClassMappings[constructor.name] = constructor;
  }

  public static getConstructorFromTypeName(type: string) {
    return MappingService.ClassMappings[type];
  }

  public static getInstanceFromTypeName(type: string, data: any) {
    const Constructor = MappingService.getConstructorFromTypeName(type);
    return Constructor ? new Constructor(data) : data;
  }

  public static getIstance(data: IRevivable): IRevivable {
    return MappingService.getInstanceFromTypeName(data._type, data);
  }

  public static getIstanceAs<T extends IRevivable>(data: IRevivable): T {
    return MappingService.getInstanceFromTypeName(data._type, data);
  }
}
