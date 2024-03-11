const express=require("express")
const vaccineroute=express.Router();

const vaccinecontroller=require("../controllers/vaccine.controller")

vaccineroute.get("/api/vaccine",vaccinecontroller.getvaccine);
vaccineroute.post("/api/vaccine",vaccinecontroller.registervaccine);

module.exports=vaccineroute;
