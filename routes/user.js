const {Router}=require('express');
const router=Router();
const {userLogin,userSignUp,userLogOut}=require('../controllers/user');
const User = require('../models/user');

router.post("/signup",userSignUp);

router.post("/login",userLogin);

router.get("/home",async(req,res)=>{

    return res.render("home",{user:req.session.user});
})

router.get("/searchpeople",async(req,res)=>{
    const allUsers=await User.find();
    console.log(allUsers);
    return res.render("searchpeople",{user:req.session.user,allUsers:allUsers});
});



router.get("/contacts",(req,res)=>{
    return res.render("usercontacts");
})

router.get("/logout",userLogOut);

module.exports=router;