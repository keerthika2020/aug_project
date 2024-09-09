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




app.get("/Prodlist",async(req,res)=>{

    await client.connect();
    let db = client.db(dbName);
    let list = await db.collection('products').find({}).toArray();
    res.status(200).json(list)
    await client.close();
 
 })
 
 // to filter the details of employess name using pathvariable can work with get and post
 app.get("/productnames/:pname",async(req,res)=>{
 
     await client.connect();
     let {pname} = req.params;
     let db = client.db(dbName);
     let list = await db.collection('products').find({"pname":pname}).toArray();
     
     res.status(200).json(list)
     //await client.close();
  
  })
  //get prices
  app.get("/productprice/:price",async(req,res)=>{
 
    await client.connect();
    let {price} = req.params;
    price = parseInt(price);
    let db = client.db(dbName);
    let list = await db.collection('products').find({"price":price}).toArray(); 
    res.status(200).json(list)
   // await client.close();
 
 })
 app.get("/productpricefilter/:price",async(req,res)=>{
 
    await client.connect();
    let {price} = req.params;
    price =  parseInt(price);
    let db = client.db(dbName);
    let list = await db.collection('products').find({"productprice":{price}}).toArray(); 
    if(list.price > 300){
        res.status(200).json(list.price)
    }else{
        res.json({"msg":"max price is 300"})
    }
 
 })
 app.delete("/deleteProductByName",async(req,res)=>{
    let {pname} = req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("products").deleteOne({"pname":pname})
    res.json({"msg" :"product deleted"})
 })

  // this line should be at the end of the code 
app.listen(8081,() => {
    console.log("server started");
});
