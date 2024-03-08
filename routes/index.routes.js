const express=require("express");



const userroute=require("./users.routes")
const loginroute=require("./loginroutes")
const vaccineroute=require("./vaccine.routes")

const appRoute = express.Router();


appRoute.use(vaccineroute)
appRoute.use(loginroute)
appRoute.use(userroute)

module.exports=appRoute
