
const mongoose=require("mongoose");
const {v4:uuidv4}=require("uuid");
const User=require("../models/user")
const {setUser,getUser}=require("../services/auth")

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

    req.session.user=user;
    const data=encodeURIComponent(JSON.stringify(user))
    return res.redirect(`/user/home`);

    // return res.redirect("/");


}

async function userLogOut(req,res){
    req.session.destroy(err => {
        if (err) {
        return res.redirect('/');
        }
        res.clearCookie('connect.sid',{path:'/'});
        res.redirect('/');
    });
}



module.exports={
    userSignUp,
    userLogin,
    userLogOut,
}