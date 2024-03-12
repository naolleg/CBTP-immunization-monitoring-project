const express=require("express")
const vaccineroute=express.Router();
const { auth, isAdmin } = require('../auth/auth');

const vaccinecontroller=require("../controllers/vaccine.controller")

vaccineroute.get("/api/vaccine",auth,vaccinecontroller.getvaccine);
vaccineroute.post("/api/vaccine",[ auth,isAdmin],vaccinecontroller.registervaccine);

module.exports=vaccineroute;
