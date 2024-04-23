const express = require("express")
const app1 = express()
const path = require("path")
const hbs = require("hbs")
const collection1 = require("./mongodb")
const templatepath = path.join(__dirname,'../templates')

const port = 8080;

app1.use(express.json())
app1.set("view engine","hbs")
app1.set("views",templatepath)
app1.use(express.urlencoded({extended:false}))
app1.get("/login",(req,res)=>{

   res.render("login");

})
app1.get("/signup",(req,res)=>{

  res.render("signup");

})

app1.post("/signup",async (req,res)=>{

const data = {
   name:req.body.name,
   password:req.body.password,
   address:req.body.address,
   tel:req.body.tel

}

await collection1.insertMany([data])
res.render("login")

})
app1.post("/login",async (req,res)=>{

   try{
    const check = await collection1.findOne({name:req.body.name})

   if(check.password===req.body.password){

    res.render("home");
   }
   else{
    res.send("password is invalid");
   }

   
   }
   catch{
   res.send("Wrong Detail")

   }
   
  })


  app1.post("/home",(req,res)=>{
 
    res.render("login");


  })
  app1.listen(port,()=>{

  console.log("MYAPI is running on port ",port)

})