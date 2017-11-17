import Database from './Database';

var database = new Database('WebDcsDatabase');

database.configure(1, {
    session: 'accessToken'
});

database.open().catch(error => {
    console.log('Error to open database:', error);
});

export default database;
