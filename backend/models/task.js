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
    },
   
    parentTask: {
        type: mongoose.Schema.Types.ObjectId, // This field holds the ObjectId of the referenced task
        ref: 'Task' // Reference to the same schema
    }
})
const Task=mongoose.model("Task",TaskSchema)
module.exports=Task