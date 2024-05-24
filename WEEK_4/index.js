// paste below code on either replit and get the server link....or deploy it somewhere and get a link
const express=require('express');
const app=express();

app.get("/sum",(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const sum=a+b;
    res.send(sum.toString());
});

app.listen(8080);
