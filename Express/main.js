
var express = require("express") 
    // require is like import 
// express is built on functions concept 
var app = express();
app.use(express.json()); // middleware function

//call express fn from express library
app.get("/myname",(req,res)=> {
res.json({"name":"KEERTHIKA.R"})
}); //develope a get api

app.post("/myname",(req,res)=> {
    res.json({"name":"Keerthika"})
    }); //develope a post api  => see in postman that this api is working or not 

    //app.post("/login",(req,res)=> {
    //res.json({"msg":"Login success"})
    //});

app.post("/login",(req,res)=> {
        //let email = req['query']['email'];
        //let password = req['query']['password'];
        let {email,password} = req['query'];
        if(email == "kiki@gmail.com" && password == "kiki123"){
            res.json({"msg":"you are correct"})
        }else{
            res.json({"msg":"you are wrong"})
        }
        console.log(email,password);
        res.json({"msg":email})
        });


app.post("/register",(req,res) => {
    let{name,email,password,address} = req['query'];
    if(name == ""||  email == "" || password == ""){
        res.json({"msg":"please enter the fields before submitting"});
    }else{
        res.json({"msg":"you have registered successfully"});
    }

    });
    // req.body can only be used for post
    app.post("/register1",(req,res) => {
        let{name,email,password,address} = req.body;
        
        //res.json({ "name":"kikki"})
        if(name == "" || email == "" || password == ""){
            res.json({"msg":"please enter the fields before submitting"});
        }else{
            res.json({"msg":"you have registered successfully"});
        }
        
    
        });
        app.post("/add",(req,res)=>{
            let {a, b } = req.body;
            
            res.json({"sum":a+b});
        })

    app.post("/createTeacher",async(req,res)=>{
        let body = req.body;
        let data = {
            'name':body['name'],
            'email':body['email'],
            'password':body['password'],
            'address':body['address'],
            'mobile':body['mobile'],

        }
        await client.connect();
        let db = client.db(staff);
        await db.collection('teachers').insertOne(data);
        res.status(200).json({"message":"Created a record"})
    })
    
    app.listen(9000,() => {
        console.log("server started");
    });

























// destructuring in javascript old way
//let user = {"email":"kiki@gmailo.com","pass":"asdfasd"}

//let email = user.email;
//let pwd = user.pass;
// new way
//let{email,pass} = user;

























