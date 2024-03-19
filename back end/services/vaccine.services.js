const vaccinequery=require("../queries/vaccine.queries")
const query =require("../config/db")

const vaccineService = {
  registervaccine: async (data) => {
    try {
      const rows = await query(vaccinequery.registervaccine, [data.v_name, data.description]);
      return rows;
    } catch (e) {
      console.log(e);
      return null;
    }
  }, 

  getAllvaccines: async () => {
    try {
      const rows = await query(vaccinequery.getvaccine);
      return rows;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
module.exports = vaccineService