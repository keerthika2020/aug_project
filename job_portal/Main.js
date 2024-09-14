var exp = require("express") ;
var app = exp();
app.use(exp.json());
var jwt = require('jsonwebtoken');
// install cors in the express to avoid cors error
var cors = require("cors");
app.use(cors());
app.use('/api/',(req,res,next)=>{
   //reading the header from the header
   let {token} = req.headers;
   if(token == "" || token == undefined){
      res.json({"msg":"pls send the token"})
   }else{
      jwt.verify(token,'secret');
   }
   //console.log("I'm middleware");
   //next();
});
//mongodb 
const { MongoClient ,ObjectId} = require('mongodb');
// Connection URL
const url = 'mongodb+srv://keerthikar2122:PCr8vleQx1NuWmUo@cluster0.eyxks.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'jobportal';
//create a job record
app.post("/createJob",async(req,res)=>{
    var {name,company_name,requirements,email,password} = req.body;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("jobs").insertOne({
        "name":name,
        "company_name":company_name,
        "requirements":requirements,
        "email":email,
        "password":password,
    });
    // to find a particular requirement from a name
    //let a = await db.collection("jobs").findOne({"name":"Hasika.B"});
    //console.log(a["requirements"][1]);
    res.json({"msg":"job created"});
   
})
// create many records at once.
app.post("/api/createManyJob",async(req,res)=>{
    await client.connect();
   let db = client.db(dbName);
   await db.collection('jobs').insertMany(req.body);
   res.status(200).json({"message":"Created a record"});
})
// get job detail
app.get("/api/jobslist",async(req,res)=>{
    await client.connect();
    let db = client.db(dbName);
    let list = await db.collection('jobs').find({}).toArray();
    res.status(200).json(list);
 })
 //get job details based on its name
 app.get("/api/jobslistnames/:name",async(req,res)=>{
    await client.connect();
    let {name} = req.params;
    let db = client.db(dbName);
    let list = await db.collection('jobs').find({"name":name}).toArray();
    res.status(200).json(list);
 })
 //find the record based on id
app.get("/api/getJobsById",async(req,res)=>{
    let {id} = req.query;
    await client.connect();
    let db = client.db(dbName);
    let data = await db.collection("jobs").find({"_id":new ObjectId(id)}).toArray();
    res.json(data);
 })
 // delete job based on name
 app.delete("/api/deleteJobsByName",async(req,res)=>{
    let {name} = req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("jobs").deleteOne({"name":name});
    res.json({"msg" :"Job deleted"});
 })
  // delete job based on id
  app.delete("/api/deleteJobsById",async(req,res)=>{
    let {id} = req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("jobs").deleteOne({"_id":new ObjectId(id)});
    res.json({"msg" :"Job deleted"});
 })
 //update job based on name
 app.put("/api/updateJobsByName",async(req,res)=>{
    let {name,requirements,email,password} = req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("jobs").updateOne( {"name":name},{$set:{"requirements": requirements, "email":email,"password":password}});
    res.json({"msg" :"jobs updated"});
 })
 //update job based on ID
 app.post("/api/updateJobsById",async(req,res)=>{
    let {id,name,company_name,requirements,email,password} = req.body;
    await client.connect();
    let db = client.db(dbName);
    await db.collection("jobs").updateOne({"_id":new ObjectId(id)},{$set:{"name":name,"company_name":company_name, "requirements": requirements,"email":email,"password":password}});
    res.json({"msg" :"jobs updated"});
 })

//login api check and create  a token 
app.post("/login", async(req,res)=>{
   let {email,password} = req.body;
   await client.connect();
   let db = client.db(dbName);
   let loginRes = await db.collection("jobs").find({"email":email,"password":password}).toArray();

   if(loginRes.length>0){
      var token = jwt.sign({ 'name':loginRes[0]['name'] }, 'secret');
         res.json({"msg":"you are correct","token ": token});
     }else{
         res.status(400).json({"msg":"you are wrong"});
     }
})


app.listen(8080,()=>{
    console.log("server started");
})



