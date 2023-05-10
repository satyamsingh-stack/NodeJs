const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'begenning';

async function getdata(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('learning');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getdata();