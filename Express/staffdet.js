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
const dbName = 'staff';
app.post("/Empdet",async(req,res)=>{

         await client.connect();
        let db = client.db(dbName);
        await db.collection('employee').insertMany(req.body);
        res.status(200).json({"message":"Created a record"})
    
   
})

app.get("/Emplist",async(req,res)=>{

   await client.connect();
   let db = client.db(dbName);
   let list = await db.collection('employee').find({}).toArray();
   res.status(200).json(list)


})

// to filter the details of employess name using pathvariable can work with get and post
app.get("/Emplistnames/:name",async(req,res)=>{

    await client.connect();
    let {name} = req.params;
    let db = client.db(dbName);
    let list = await db.collection('employee').find({"name":name}).toArray();
    
    res.status(200).json(list)
 
 
 })


 app.delete("/deleteEmpByName",async(req,res)=>{
    let {name} = req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("employee").deleteOne({"name":name})
    res.json({"msg" :"employee deleted"})
 })


 app.get("/emplogin",async(req,res)=>{

    await client.connect();
    let {email,password} = req.body;
    let db = client.db(dbName);
    let list = await db.collection('employee').find({"email":email,"password":password}).toArray();
    if(list.length>0){
        res.json({"msg":"you are correct"});
    }else{
        res.status(400).json({"msg":"you are wrong"});
    }
    res.status(200).json(list)
 
 
 })
 app.put("/updateName",async(req,res)=>{
    let {name,password} = req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("employee").updateOne( {"name":name},{$set:{"password": password}})
    res.json({"msg" :"employee updated"})
 })
 //








// this line should be at the end of the code 
app.listen(3030,() => {
    console.log("server started");
});

 