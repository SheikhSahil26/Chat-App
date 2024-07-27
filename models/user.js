const {model,Schema}=require("mongoose");
const {v4:uuidv4}= require("uuid");

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profileImageUrl:{
        type:String,
        required:false,
    },
    contacts:{
        type:[],
        
    }
},
{timestamps:true});

const User=model("user",userSchema);

module.exports=User;