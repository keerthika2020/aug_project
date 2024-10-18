var express = require("express") 
    // require is like import 
// express is built on functions concept 
var app = express();
app.use(express.json()); // middleware function

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://keerthikar2122:PCr8vleQx1NuWmUo@cluster0.eyxks.mongodb.net/';
const client = new MongoClient(url);
// Database Name
const dbName = 'company';
app.post("/product",async(req,res)=>{
   await client.connect();
   let db = client.db(dbName);
   await db.collection('products').insertMany(req.body);
   res.status(200).json({"message":"Created a record"});
   //await client.close();
})

app.post("/productOne", async (req, res) => {
    let body = req.body;
    let data = {
        'pname': body['pname'],
        'price': body['price'],
        'Qnt': body['Qnt'],
        'rating': body['rating'],
    };

    await client.connect();
    let db = client.db(dbName);
    await db.collection('products').insertOne(data); // Insert the data into MongoDB
    res.status(200).json({ "message": "Created a record" });
});

app.listen(8080,() => {
    console.log("server started");
});
