const childController = require("../controllers/child.controller");
const express=require("express")
const childroute=express.Router();

childroute.get("api/child",childController.getchild);
childroute.post("api/child",childController.postchild);
childroute.get("api/user/:mother_id",xchild.getchild);
