const query = require("../config/db");
const userquery = require("../queries/users.queries");

const userservice = {
  getRoleByUsername: async (data) => {
    try {
      const row = await query(userquery.getRoleByUsername, [data]);
      return row;
    } catch (error) {
      throw error;
    }
  },

  deactivateUser: async (userId) => {
    try {
      const rows = await query(userquery.deactivateUser, [userId]);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getAlluser: async (data) => {
    try {
      const row = await query(userquery.getuserquery, [data]);
      return row;
    } catch (error) {
      throw error;
    }
  },

  getUserByUsername: async (data) => {
    try {
      const rows = await query(userquery.getUserByusername, [data]);
      return rows;
    } catch (error) {
      throw error;
    }
  },
    

  registeruser: async (  username,
    password,
    firstname,
    role,
    lastname,
    phonenumber) => {
    try {
      const rows = await query(userquery.registeruser, [
        username,
          password,
          firstname,
          role,
          lastname,
          phonenumber
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
      const rows = await query(userquery.registermother, [
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
  
};

module.exports = userservice;
