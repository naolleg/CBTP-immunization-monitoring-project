const query =require("../config/db");
const loginquery = require("../queries/login.queries");
const loginService = {
    getUserByusername: async (data) => {
      try {
        const rows = await query(loginquery.getUserByusername, [data.username]);
        return rows;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
    getUserPasswordByUserId: async (data) => {
      try {
        const rows = await query(loginquery.getUserPasswordByUserId, [data.userId]);
        return rows;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
    getUserRoleAndFirstName:async (data) => {
        try {
          const rows = await query(loginquery.getUserRoleAndFirstName, [data.userId]);
          console.log(rows);
          return rows;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
      getUserStatus:async (data) => {
        try {
          const rows = await query(loginquery.getUserStatus, [data.userId]);
          console.log(rows);
          return rows;
        } catch (e) {
          console.log(e);
          return null;
        }
      }
    };
    module.exports=loginService