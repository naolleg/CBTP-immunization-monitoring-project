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
      const rows = await query(userquery.getUserByusername, [data.username]);
      return rows;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  registeruser: async (username, firstname, lastname, role, password) => {
    try {
      const rows = await query(userquery.registeruser, [
        firstname,
        lastname,
        username,
        role,
        password,
      ]);
      return rows;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  registermother: async (userId, dateOfBirth, address, phoneNumber) => {
    try {
      const rows = await query(userquery.registermother, [
        userId,
        dateOfBirth,
        address,
        phoneNumber,
      ]);
      return rows;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  
};

module.exports = userservice;
