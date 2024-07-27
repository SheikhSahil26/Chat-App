const {Router}=require('express');
const router=Router();
const {userLogin,userSignUp}=require('../controllers/user');

router.post("/signup",userSignUp);

router.post("/login",userLogin);

module.exports=router;