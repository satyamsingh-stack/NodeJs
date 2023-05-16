const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'begenning';

async function getconnect(){
    const result = await client.connect();
    db = result.db(database);
    return db.collection('learning');
}

module.exports = getconnect;