const express=require("express");



const userroute=require("./users.routes")
const loginroute=require("./loginroutes")
const vaccineroute=require("./vaccine.routes")
const newsroute=require("./news.routes")
const profileroute=require("./profile.routes")
const appRoute = express.Router();


appRoute.use(vaccineroute)
appRoute.use(loginroute)
appRoute.use(userroute)
appRoute.use(newsroute)
appRoute.use(profileroute)

module.exports=appRoute
