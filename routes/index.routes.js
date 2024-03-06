const express=require("express");

const appRoute=express.router();

const userroute=require("./users.routes")
const loginroute=require("./loginroutes")
const vaccineroute=require("./vaccine.routes")

appRoute.use(userroute)
appRoute.use(vaccineroute)
appRoute.use(loginroute)

module.exports=appRoute
