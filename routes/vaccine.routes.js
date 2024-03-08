const vaccinecontroller=require("../controllers/vaccine.controller")
const express=require("express")
const vaccineroute=express.Router();

vaccineroute.get("/vaccine",vaccinecontroller.getvaccine);

module.exports=vaccineroute;
