const usercontroller=require("../controllers/users.controller")
const registrercontroller=require("../controllers/Registerer.controller")
const express=require("express")
const userroute=express.Router();
const { auth, isAdmin, isRegistrer } = require('../auth/auth');

userroute.get("/api/user",usercontroller.getuser);
userroute.put("/api/user/:userId/deactivate",[auth,isAdmin],usercontroller.deactivateuser);
userroute.post("/api/user",usercontroller.registeruser);
userroute.get("/api/user/mother",registrercontroller. getallmother);
userroute.post("/api/user/mother",registrercontroller.registermother);
userroute.post("/api/user/child",registrercontroller.registerChild);
module.exports=userroute;
