const loginService = require("../services/login.services");
const userService = require("../services/users.services");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController = {
  login: async (req, res) => {
    try {
      const { username,password } = req.body;

      // Validation
      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }
                                                                                                  
      
      const isUsernameExist = await userService.getUserByUsername(req.body);

      // If there is no account related to this email
      if (!isUsernameExist.length) {
        return res.status(404).json({
          success: false,
          message: "No account exists with this username",
        });
      }
      const userStatus = await loginService.getUserStatus(isUsernameExist[0].user_id);

      if (userStatus === null) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (userStatus === 0) {
        return res.status(401).json({ message: 'User is deactivated' });
      }
      // If the account exists, check for password
      req.body.userId = isUsernameExist[0].user_id;
      const isUserPasswordExist = await loginService.getUserPasswordByUserId(
        req.body
      );
      const dbPassword = isUserPasswordExist[0].password;

      // Compare user password with db password
      // const isMatch = password, dbPassword;
      if  (password === dbPassword) {
         //Extracting first name and user role
         const userInfo = await loginService.getUserRoleAndFirstName(req.body);
         console.log(userInfo);
         const firstname = userInfo[0].firstname;
         const role = userInfo[0].role;
         const userId = req.body.userId;
 
         //Prepare token
         const token = jwt.sign(
           { userId, role, firstname },
           process.env.JWT_SECRET,
           {
             expiresIn: '1h',
           }
         );
         console.log(token);
 
         return res.status(200).json({
           token,
           success: true,
           message: "Login successfully",
         });
      } else {
       
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        }); }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = loginController;