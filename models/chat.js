const {model,Schema, Types}=require("mongoose");
const User=require("./user");

const chatSchema=new Schema({
    chatBody:{
        type:String,
        required:true, 
    },
    chatSender:{
        type:Schema.Types.ObjectId,
        ref:"users",
    },
    chatReciever:{
        type:Schema.Types.ObjectId,
        ref:"users",
    }
    
})