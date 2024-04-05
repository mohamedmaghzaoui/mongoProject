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
    description:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true,
        index:true
    }
})
const Task=mongoose.model("Task",TaskSchema)
module.exports=Task