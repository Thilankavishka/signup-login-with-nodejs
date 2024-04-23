const mongoose = require('mongoose');
const { type } = require('os');
const { double } = require('webidl-conversions');
mongoose.connect('mongodb://localhost:27017/logindata')

.then(()=>{

  console.log("Mongo db connected");

})

.catch(()=>{
  
   console.log("failed to connect");

})

const loginscema=mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   address:{
    type:String,
    required:true

   },
   tel:{
   type:String,
   required:true

   }

})

const collection = new mongoose.model("collection1",loginscema)

module.exports = collection