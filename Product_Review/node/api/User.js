var express = require("express");
var router = express.Router();
//http://localhost:8080/user/register
router.post("/login",(req,res)=>{
    let {email,password}= req.body;
    res.json({"msg":"login test"})
    })
router.post("/register",(req,res)=>{
        let {email,password,name,mobile}= req.body;
        res.json({"msg":"register test"})
        })


module.exports = router;