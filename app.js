const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const session=require("express-session");

app.use(session({
    secret: '1234567890',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false ,path:'/' } // Set secure: true if using HTTPS
  }));

const port=300;

const path=require('path');
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

mongoose.connect("mongodb://127.0.0.1:27017/chatting")
.then((e)=>console.log("mongoDB connected successfully"));

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

const staticRoute=require("./routes/static");
const userRoute=require("./routes/user");


app.use("/",staticRoute);
// app.use("/user",userRoute);

app.use("/user",userRoute);

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})
