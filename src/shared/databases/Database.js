import LocalForage from 'localforage';

export default class Database {
  constructor(name) {
    Object.assign(this, {
      Instance: LocalForage.createInstance({
        name
      })
    });
  }
}
