const {Router}=require('express');
const router=Router();
const path=require('path');
const multer=require('multer');

const uploadDir=path.join(__dirname,"..",'public','image');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        const uploadPath = path.join(uploadDir,'./');
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename:function(req,file,cb){
        return cb(null,Date.now()+"-"+file.originalname);
    }
})

router.get("/",(req,res)=>{
    return res.render("home");
})
router.get("/signup",(req,res)=>{
    return res.render("signup");
})
router.get("/about",(req,res)=>{
    return res.render("about");
})
module.exports=router;