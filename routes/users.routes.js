const usercontroller=require("../controllers/users.controller")
const express=require("express")
const userroute=express.Router();

userroute.get("/user",usercontroller.getuser);
module.exports=userroute;
