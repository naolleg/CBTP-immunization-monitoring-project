const express=require("express")
const scheduleroute=express.Router();
const { auth, isAdmin } = require('../auth/auth');
const schedulecontroller=require("../controllers/schedule.controller")

scheduleroute.get("/api/schedule",auth,schedulecontroller.getNews);


module.exports=newsroute;
