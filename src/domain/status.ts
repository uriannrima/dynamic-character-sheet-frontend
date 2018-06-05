export class Status {
  healthPoints: number = 1;
  wounds: string = '';
  nonLethalDamage: number = 0;

  constructor (model?: Status | { healthPoints?: number, wounds?: string, nonLethalDamage?: number }) {
    Object.assign(this, model)
  }
}

export default Status
