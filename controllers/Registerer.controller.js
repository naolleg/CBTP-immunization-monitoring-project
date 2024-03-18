const registrerService=require("../services/registrer.services")
const userservice=require("../services/users.services")
const bcrypt = require("bcrypt"); // Import bcrypt correctly
const dotenv = require("dotenv");
dotenv.config();
const registrercontroller={


  registermother: async (req,res,next)=>{
   
    try {
      const {
        username,
        password,
        firstname,
        lastname,
        date_of_birth,
        address,
        phonenumber
      } = req.body;
      
      if( !username ||
        !password ||
        !firstname ||
        !lastname ||!date_of_birth||!address||!phonenumber){
          return res.status(400).json({
            success: false,
            message: "All fields are required"
          })
        }
        console.log("ssferegfewref");
        const isUserExist = await userservice.getUserByUsername(username);
        console.log(isUserExist);
        if(isUserExist.length>0){
          return res.status(400).json({
            success: false,
            message: "this username is taken"
          })
        }
        //add constant for the salt
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds);
        req.body.password = bcrypt.hashSync(password,salt);
        
        console.log("dsssvvfsvfssvf");
        const registerAsUser = await registrerService.registermotherAsuser(
          username,
          firstname,
          lastname,
          password
        );
        console.log(registerAsUser);
        const userid = registerAsUser.insertId;
        console.log(userid);
const registerAsMother = await registrerService.registermother(
  userid,
  date_of_birth,
  address,
  phonenumber
);

     
        if(registerAsUser&&registerAsMother){
          return res.status(200).json({
            success: true,
            message: "user registered successfully"
          })
        }
      
    } catch (error) {
      throw error
    }


  },
registerChild:async(req,res)=>{
  try {
    const{
      firstname,
      middlename,
      lastname,
      gender,
      date_of_birth,
      blood_type
    }=req.body
    if( !middlename ||
      !gender ||
      !date_of_birth ||
      !firstname ||
      !lastname ||
      !blood_type){
        return res.status(400).json({
          success: false,
          message: "All fields are required"
        })
      }

      const registerchild = await registrerService.registerchild(req.body);
      if(registerchild){
        return res.status(200).json({
          success: true,
          message: "user registered successfully"
        })
      }


  } catch (error) {
    throw error
    
  }
    },}
module.exports=registrercontroller