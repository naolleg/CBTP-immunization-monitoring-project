const express=require("express")
const newsroute=express.Router();
const { auth, isAdmin } = require('../auth/auth');
const newscontroller=require("../controllers/news.controller")
const upload=require("../config/multer")

newsroute.get("/api/news",newscontroller.getNews);
newsroute.post("/api/news",upload.single("image"),newscontroller.postNews);

module.exports=newsroute;
