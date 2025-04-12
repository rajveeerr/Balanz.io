const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    due:{
        type:String //i will assume that the front-end changes it to string
    },
    category:{
        type:String
    },
    completed:{
        type:Boolean
    },
    status:{
        type:String
    },
    priority:{
        type:String
    }
})
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    name:{
        type:String,
        lowercase:true
    },
    password:{
        type:String
    },
    profileImg:{
        type:String
    },
    todos:[todoSchema]
})

const userModel=mongoose.model('userModel',userSchema)
module.exports=userModel