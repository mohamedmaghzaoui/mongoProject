const mongoose=require("mongoose")
const TaskSchema=new mongoose.Schema({
    //task title
    title:{
        type:String,
        required:true,
        
        
    },
    //task date 
    date:{
        type:Date,
        required:true,
    },
    //task description
    description:{
        type:String,
        required:false
    },
    //task username
    username:{
        type:String,
        required:true,
        index:true
    },
    
   //reference
    parentTask: {
        type: mongoose.Schema.Types.ObjectId, // This field holds the ObjectId of the referenced task
        ref: 'Task' // Reference to the same schema
    }
})
const Task=mongoose.model("Task",TaskSchema)
module.exports=Task
