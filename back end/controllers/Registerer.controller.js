const registrerService = require("../services/registrer.services");
const userservice = require("../services/users.services");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const registrercontroller = {
  registermother: async (req, res, next) => {
    try {
      const {
        firstname,
        lastname,
        date_of_birth,
        address,
        phonenumber
      } = req.body;

      if (!firstname || !lastname || !date_of_birth || !address || !phonenumber) {
        return res.status(400).json({
          success: false,
          message: "All fields are required"
        });
      }

      // Generate username from first name and last name
      const username = generateUsername(firstname, lastname);

      const isUserExist = await userservice.getUserByUsername(username);
      if (isUserExist.length > 0) {
        return res.status(400).json({
          success: false,
          message: "This username is taken"
        });
      }

      // Generate password
      const password = generatePassword();

      // Hash the password
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const registerAsUser = await registrerService.registermotherAsuser(
        username,
        firstname,
        lastname,
        hashedPassword
      );
      const userid = registerAsUser.insertId;

      const registerAsMother = await registrerService.registermother(
        userid,
        date_of_birth,
        address,
        phonenumber
      );

      if (registerAsUser && registerAsMother) {
        return res.status(200).json({
          success: true,
          message: "User registered successfully",
          username: username,
          password: password
        });
      }
    } catch (error) {
      throw error;
    }
  },

  registerChild: async (req, res) => {
    try {
      const {
        firstname,
        middlename,
        lastname,
        gender,
        date_of_birth,
        blood_type
      } = req.body;

      if (
        !middlename ||
        !gender ||
        !date_of_birth ||
        !firstname ||
        !lastname ||
        !blood_type
      ) {
        return res.status(400).json({
          success: false,
          message: "All fields are required"
        });
      }

      const registerchild = await registrerService.registerchild(req.body);
      if (registerchild) {
        return res.status(200).json({
          success: true,
          message: "User registered successfully"
        });
      }
    } catch (error) {
      throw error;
    }
  },

  getallmother: async (req, res) => {
    const result = await registrerService.getallmothers(req.body);
    return res.status(200).json({
      success: true,
      data: result
    });
  },

  getchildrenbymotherId: async (req, res) => {
    const motherId = req.params.motherId;
    const result = await registrerService.getchildrenbymotherId(motherId);
    return res.status(200).json({
      success: true,
      data: result
    });
  }
};

// Helper function to generate a username from first name and last name
function generateUsername(firstname, lastname) {
  const uniqueId = Math.floor(Math.random() * 100); 
  const username = `${firstname.toLowerCase()}.${lastname.toLowerCase()}.${uniqueId}`;
  return username;
}

// Helper function to generate a random password


function generatePassword() {
  // Generate a random alphanumeric password
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

module.exports = registrercontroller;