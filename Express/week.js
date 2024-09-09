var express = require("express") 
  
var app = express();
app.use(express.json());

const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://keerthikar2122:PCr8vleQx1NuWmUo@cluster0.eyxks.mongodb.net/';
const client = new MongoClient(url);
























