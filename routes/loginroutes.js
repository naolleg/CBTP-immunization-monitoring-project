const logincontroller=require("../controllers/login.controller")
const express=require("express")
const loginroute=express.Router();

loginroute.get("/login",logincontroller.login);
module.exports=loginroute;