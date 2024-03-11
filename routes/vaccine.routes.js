const express=require("express")
const vaccineroute=express.Router();

const vaccinecontroller=require("../controllers/vaccine.controller")

vaccineroute.get("/vaccine",vaccinecontroller.getvaccine);
vaccineroute.post("/vaccine",vaccinecontroller.registervaccine);

module.exports=vaccineroute;
