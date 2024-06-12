
const mongoose=require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://Admin:Helloworld123@cluster0.j1hw4n6.mongodb.net/Todos");

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
 todo:todo
}