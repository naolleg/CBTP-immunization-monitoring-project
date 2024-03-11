const usercontroller=require("../controllers/users.controller")
const express=require("express")
const userroute=express.Router();

userroute.get("/api/user",usercontroller.getuser);
userroute.post("/api/user",usercontroller.registeruser);
userroute
module.exports=userroute;
