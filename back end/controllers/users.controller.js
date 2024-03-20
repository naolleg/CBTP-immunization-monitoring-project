const userservice=require("../services/users.services")
const deactivateUser = require("../services/users.services").deactivateUser;
const bcrypt = require("bcrypt");
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
  registeruser: async (req,res,next)=>{
    
    try {
      let {
        username,
        password,
        firstname,
        role,
        lastname,
        phonenumber
      } = req.body;
      
      if( !username ||
        !password ||
        !firstname ||!role||
        !lastname ||!phonenumber){
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
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        
        try {
          password = bcrypt.hashSync(password, salt);
          

        } catch (error) {
        
          console.error('Error occurred during password hashing:', error);
          
          throw error;
        }
        console.log("dsssvvfsvfssvf");
        const registerAsUser = await userservice.registeruser(
          username,
          password,
          firstname,
          role,
          lastname,
          phonenumber
        );
        if(registerAsUser){
          return res.status(200).json({
            success: true,
            message: "user registered successfully"
          })
        }
      
    } catch (error) {
      throw error
    }


  },  deactivateuser: async (req, res) => {
    const userId = req.params.userId;
    try {
      if (!userId) {
        return res.status(404).json({ message: "Userid not included" });
      }

      console.log(userId);
      const updateStatus = await deactivateUser(userId);

      if (!updateStatus) {
        return res.status(400).json({
          success: false,
          message: "Failed to update user status",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User deactivated successfully",
      });
    } catch (error) {
      throw error;
    }
  },


  updateUser: (req,res)=>{},

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