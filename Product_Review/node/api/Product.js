var express = require("express");
var router = express.Router();
//mongodb 
const { MongoClient ,ObjectId} = require('mongodb');
// Connection URL
const url = 'mongodb+srv://keerthikar2122:PCr8vleQx1NuWmUo@cluster0.eyxks.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'product-review';

//http://localhost:8080/Product/getAllProducts
router.get("/getAllProducts",async(req,res)=>{
    await client.connect();
    let db = client.db(dbName);
    let ProductList = await db.collection("product").find({}).sort({"name":1}).skip(1).limit(3).toArray();
    //let ProductList =  await db.collection("product").find({}).toArray();
    res.status(200).json(ProductList);
    console.log("Review list fetched:", ProductList);
    })

router.get("/getProductDetailsById",(req,res)=>{
        let {id}= req.body;
       
        })
router.post("/postProductReview",async(req,res)=>{
    let {name,category,reviewText}= req.body;
    let data = {
        "name":name,
        "category":category,
        "reviewText":reviewText,
    }
    await client.connect();
    let db = client.db(dbName);
   await db.collection("product").insertOne(data);
   res.json({"msg":"Product is added for review"})
    })

module.exports = router;