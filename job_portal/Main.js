var exp = require("express") ;
var app = exp();
app.use(exp.json());
//mongodb 
const { MongoClient } = require('mongodb');

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://keerthikar2122:PCr8vleQx1NuWmUo@cluster0.eyxks.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'jobportal';

app.post("/createJob",async(req,res)=>{
    var {name,company_name,requirements} = req.body;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("jobs").insertOne({
        "name":name,
        "company_name":company_name,
        "requirements":requirements
    });
    // to find a particular requirement from a name
    //let a = await db.collection("jobs").findOne({"name":"Hasika.B"});
    //console.log(a["requirements"][1]);
    res.json({"msg":"job created"})
   
})


app.listen(8080,()=>{
    console.log("server started");
})



