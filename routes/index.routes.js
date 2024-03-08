const express=require("express");



const userroute=require("./users.routes")
const loginroute=require("./loginroutes")
const vaccineroute=require("./vaccine.routes")

const appRoute = express.Router();


appRoute.use(vaccineroute)
appRoute.use(loginroute)
appRoute.use(userroute)

app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
module.exports=appRoute
