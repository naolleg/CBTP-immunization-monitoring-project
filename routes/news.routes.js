const express=require("express")
const newsroute=express.Router();

const newscontroller=require("../controllers/news.controller")

newsroute.get("/api/news",newscontroller.getNews);
newsroute.post("/api/news",newscontroller.postNews);

module.exports=newsroute;
