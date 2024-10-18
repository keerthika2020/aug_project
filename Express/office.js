const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://keerthikar2122:PCr8vleQx1NuWmUo@cluster0.eyxks.mongodb.net/';
const client = new MongoClient(url);
// Database Name
const dbName = 'office';

async function insertData(){
    let empData ={
        "name":"keerthi",
        "mobile":"9867234234",
        "address":"mugappair",
    }
    await client.connect();
    const db = client.db(dbName);
    const collection = await db.collection('employee');
    await collection.insertOne(empData);
    console.log('Record inserted');
}


insertData();
