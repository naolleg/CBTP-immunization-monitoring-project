const logincontroller=require("../controllers/login.controller")
const express=require("express")
const loginroute=express.Router();

loginroute.post("/api/login",logincontroller.login);

module.exports=loginroute;