const { json } = require('body-parser');
const express=require('express');
const app=express();
//seeded our in memory db
const user={
    name:"John",
    kidneys:[
        {
            healthy:false
        }
    ]
};
const users=[user];
app.use(express.json());
//creating different routes

//get request
app.get("/",function(req,res){
 const johnKidneys=users[0].kidneys;
 const numberOfKidneys=johnKidneys.length;
 let healthyKidneys=0;
 for(let i=0;i<numberOfKidneys;i++){
    if(johnKidneys[i].healthy)
     healthyKidneys++;
 }
 const unhealthyKidneys=numberOfKidneys-healthyKidneys;
 res.json({
    johnKidneys,
    numberOfKidneys,
    healthyKidneys,
    unhealthyKidneys
 })

})

//post request
app.post("/",function(req,res){
   const isHealthy=req.body.isHealthy;
   users[0].kidneys.push({
    healthy:isHealthy
   })
   res.json({
    msg:"done!"
   })
})

//put request

app.put("/",function(req,res){
 for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy=true;
 }
 res.json({
    msg:"Put Done"
 });
})

//delete request
app.delete("/",function(req,res){
 if(isThereAnyUnhealthyKidney()){
    const newKidneys=[];
 for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
        newKidneys.push({
            healthy:true
        })
    }
 }
 users[0].kidneys=newKidneys;
 res.json({
    msg:"Delete Done"
 })
 }
 else{
    res.status(411).json({
        msg:"You have no bad kidneys"
    });
 }
})
function isThereAnyUnhealthyKidney(){
    let atLeastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
           atLeastOneUnhealthyKidney=true;
        }
     }
     return atLeastOneUnhealthyKidney;

}
app.listen(3000);


