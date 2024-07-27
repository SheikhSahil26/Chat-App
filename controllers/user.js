
const mongoose=require("mongoose");
const {v4:uuidv4}=require("uuid");
const User=require("../models/user")

async function userSignUp(req,res){
    const {name,email,password,}=req.body;
    await User.create({
        name,
        email,
        password,
        profileImageUrl:"",
        contacts:[],
    })
    return res.redirect('/signup');
}

async function userLogin(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({email,password});
    if(!user)
        console.log("invalid credentials");

    

    return res.redirect("/");


}


module.exports={
    userSignUp,
    userLogin,
}