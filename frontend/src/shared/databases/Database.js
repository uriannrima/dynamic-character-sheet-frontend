import Dexie from 'dexie';

export default class Database {
    constructor(databaseName) {
        Object.assign(this, {
            Instance: new Dexie(databaseName)
        });
    }

    configure(version = 1, schema) {
        this.Instance.version(version).stores(schema);
    }

    async open() {
        try {
            return await this.Instance.open();
        } catch (error) {
            throw error;
        }
    }
}
