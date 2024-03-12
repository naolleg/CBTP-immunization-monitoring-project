const profileService = require("../services/profile.sevices");
const profileController = {
    

getProfile: async (req, res, next) => {
    try {
      const userId = req.userId;

      if (userId) {
        console.log(userId);
        const userData = await profileService.getUserProfile(userId);

        if (userData) {
          return res.status(200).json({
            status: true,
            data: userData,
          });
        } else {
          return res.status(500).json({
            status: false,
            message: "Error fetching user data",
          });
        }
      } else {
        return res.status(500).json({
          status: false,
          message: "Invalid token",
        });
      }
    } catch (error) {
      console.error("Error in getProfile:", error);
      return res.status(500).json({
        status: false,
        message: "Internal server error",
      });
    }
  },
  updateProfile:async (req, res, next) => {
  }}

module.exports= profileController;
