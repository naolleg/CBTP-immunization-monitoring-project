const express=require("express");
const approute=require("./routes/index.routes")
const app=express();

//middle ware
app.use(express.urlencoded[{extended:true}]);
app.use(express.json);


app.use(appRoute);

app.get("/",(res,req)=>
{
console.log("hi");
})