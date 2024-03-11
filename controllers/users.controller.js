const userservice=require("../services/users.services")
const bcrypt = require("bcrypt"); // Import bcrypt correctly
const dotenv = require("dotenv");
dotenv.config();
const usercontroller={

getuser: async (req,res)=>{
    const result = await userservice.getAlluser();
   // console.log(result);
    return res.status(200).json({
        success: true,
        data: result
    })
  },
registermother: async (req,res)=>{
    try {
      const {
        username,
        password,
        role,
        firstname,
        lastname,
        image,
        date_of_birth,
        address,
        phone_number
         
      } = req.body;
      if( !username ||
        !password ||
        !role ||
        !firstname ||
        !lastname ||
        !image ||!date_of_birth||!address||!phone_number){
          return res.status(400).json({
            success: false,
            message: "All fields are required"
          })
        }
        
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
        
        const registerAsUser = await userservice.registeruser(req.body);
        const registerAsMother = await userservice.registermother(req.body);

        console.log(isUserRegistered.insertId);
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

      const registerchild = await userservice.registerchild(req.body);
      if(registerchild){
        return res.status(200).json({
          success: true,
          message: "user registered successfully"
        })
      }


















  } catch (error) {
    throw error
    
  }
},
  updateUser: (req,res)=>{},
  deleteUser: (req,res)=>{},
//   getUsers: async (req,res)=>{
//     const result = await userService.getAllusers();
//    // console.log(result);
//     return res.status(200).json({
//         success: true,
//         data: result
//     })
//   },
//   getsingleUsers: async (req,res)=>{
//     const id = req.params.id.substring(1);
//     const result = await UserService.getSinglelusers(id);
//     if(result.length>0){
//       return res.status(200).json({
//         success: true,
//         data: result
//       })
//     }
    // else{
    //   return res.status(400).json({
    //     success: false,
    //     message: "no user is found"
    //   })
    // }

  }


module.exports=usercontroller