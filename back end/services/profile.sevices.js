const query=require("../config/db");
const profilequery=require("../queries/profile.queries");

const profileService = {
    getUserProfile: async (userId) => {
        try {
            const row = await query(profilequery.getUserProfile, [data]);
            return row;
          } catch (error) {
            console.log(error);
            return false;
          }
        },
};
module.exports = profileService