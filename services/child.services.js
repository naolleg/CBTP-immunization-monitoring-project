const query = require("../config/db");
const childquery = require("../queries/child.queries");

const childService = {

    getchildbymother: async(data) => {
       const row=await query(childquery.getchildbymother, data)
       return row
    },
    getchildbyid:async (data) => {
        const row=await query(childquery.getchildbyid,data)
        return row
    },
    getchildlastvaccination:async (data) => {
        const row=await query(childquery.getchildlastvaccination,data)
        return row
    }
}