const vaccineService=require("../services/vaccine.services")

const vaccinecontroller = {
  registervaccine: async(req,res)=>{
   const {
      v_name,
      description,
    } = req.body;
    if( !v_name ||!description ){
        return res.status(400).json({
          success: false,
          message: "All fields are required"
        })
      }
const result=await vaccineService.registervaccine(req.body);
return res.status(200).json({
    success: true,
    data: result
})
  },
  getvaccine: async(req,res)=>{
    const result=await vaccineService.getAllvaccines();
    return res.status(200).json({
        success: true,
        data: result
    })
}

};
Vaccination: async(req,res)=>{
  const result=await vaccineService.recordVaccination(req.body);
  return res.status(200).json({
      success: true,
      data: result
  })
}

module.exports=vaccinecontroller