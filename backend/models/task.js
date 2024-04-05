const mongoose=require("mongoose")
const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        index:true
    }
})
const Task=mongoose.model("Task",TaskSchema)
module.exports=Task