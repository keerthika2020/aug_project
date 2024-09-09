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
app.post("/createTeacher",async(req,res)=>{
    let body = req.body;
    let data = {
        'name':body['name'],
        'email':body['email'],
        'password':body['password'],
        'address':body['address'],
        'mobile':body['mobile'],

    }
    // destructureng is also possible
    //let{name,email,password,address,mobile} = req.body
    /*let data = {
        'name':'name',
        'email':'email',
        'password':'password',
        'address':'address',
        'mobile':'mobile'

    }*/
  

        await client.connect();
        let db = client.db(dbName);
        await db.collection('teachers').insertOne(data);
        res.status(200).json({"message":"Created a record"})
    
   
})
// this line should be at the end of the code 
app.listen(3000,() => {
    console.log("server started");
});

