const usercontroller=require("../controllers/users.controller")
const express=require("express")
const userroute=express.Router();
const { auth, isAdmin, isRegistrer } = require('../auth/auth');

userroute.get("/api/user",[auth,isAdmin],usercontroller.getuser);
userroute.put("/api/user/:userId/deactivate",[auth,isAdmin],usercontroller.deactivateuser);
userroute.post("/api/user",[auth,isRegistrer],usercontroller.registeruser);
userroute
module.exports=userroute;
