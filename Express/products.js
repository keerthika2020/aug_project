var express = require("express") 
    // require is like import 
// express is built on functions concept 
var app = express();
app.use(express.json()); // middleware function

const { MongoClient, ObjectId } = require('mongodb');

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
 app.get("/productpricefilter",async(req,res)=>{
 
    await client.connect();
    price =  parseInt(price);
    let db = client.db(dbName);
    var filterList = {};
    let {price} = req.query;
    if(price >= 300){
        filterList['price'] = price; 
        let list = await db.collection("products").find(filterList).toArray();
        res.json(list);
    }
   
       
    else{
        res.json({"msg":"max price is 300"})
    }
 
 })
 app.delete("/deleteProductByName",async(req,res)=>{
    let {pname} = req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("products").deleteOne({"pname":pname});
    res.json({"msg" :"product deleted"})
 })
 app.put("/updateprice",async(req,res)=>{
    let {pname,price} = req.query;
    price = parseInt(price);
    await client.connect();
    let db = client.db(dbName);
    await db.collection("products").updateOne({"pname": pname} ,{$set:{"price":price}});
    res.json({"msg" :"product updated"})
 })

 // instead of put use post and req.body and create an api
 app.post("/updatePostprice",async(req,res)=>{
    let {pname,price} = req.body;
    price = parseInt(price);
    await client.connect();
    let db = client.db(dbName);
    await db.collection("products").updateOne({"pname": pname} ,{$set:{"price":price}});
    res.json({"msg" :"product updated"})
 })

 //find the record based on id
 app.get("/getById",async(req,res)=>{
    let {id} = req.query;
    await client.connect();
    let db = client.db(dbName);
    let data = await db.collection("products").find({"_id":new ObjectId(id)}).toArray();
    res.json(data);
 })

  // this line should be at the end of the code 
app.listen(8081,() => {
    console.log("server started");
});
