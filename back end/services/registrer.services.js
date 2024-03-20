const query = require("../config/db");
const registrerQuery=require("../queries/registrer.queries")

const registrerService = {
      
  getallmothers: async ()=>{
    try {
        const row = await query(registrerQuery.getallmother);
        return row;
    } catch (error) {
        throw error
    }

},
     
    registermotherAsuser: async (username, firstname, lastname, password,role) => {
    try {
      const rows = await query(registrerQuery.registermotherAsuser, [
        firstname,
        lastname,
        username,
        password,
        role
      ]);
      console.log(rows);
      return rows;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  registermother: async (userid, date_of_birth, address, phonenumber) => {
    try {
      const rows = await query(registrerQuery.registermother, [
        userid,
        date_of_birth,
        address,
        phonenumber,
      ]);
      console.log(rows);
      return rows;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  registerchild: async ( data) => {
    try {
      const rows = await query(registrerQuery.registerchild, [data]);
      console.log(rows);
      return rows;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

}
module.exports=registrerService