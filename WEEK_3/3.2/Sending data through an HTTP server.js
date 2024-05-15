const mongoose=require("mongoose");
const express=require("express");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://Admin:Helloworld123@cluster0.j1hw4n6.mongodb.net/userappnew");
const User=mongoose.model('Users',{
  name:String,
  email:String,
  password:String

});

app.post("/signup",async function(req,res){
  const username=req.body.username;
  const password=req.body.password;
  const name=req.body.name;
  const existingUser=await User.findOne({email:username});
  if(existingUser){
    res.status(400).send("User already exists");
  }
  const user=new User({
    name:name,
    email:username,
    password:password
  });
  user.save();
  res.json({
    "msg":"user created successfully"
  })
});
app.listen(3000);
