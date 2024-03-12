const query =require("../config/db")
const userquery=require("../queries/users.queries")

const userservice={
  getrolebyusername:async(data)=>{
try {
  const row=await query(userquery.getRoleByUsername,[data])
} catch (error) {
  throw error
}
  },
    
    getAlluser:async(data)=>{
        try {
    const row=await query(userquery.getuserquery,[data])
    return row
  }
  catch (error) {
    throw error
  }   
},getUserByUsername: async (data) => {
  try {
    const rows = await query(userquery.getUserByusername, [data.username]);
    return rows;
  } catch (e) {
    console.log(e);
    return null;
  }
},
registeruser:async (data)=>{
    try {
        const rows = await query(userquery.registeruser, [data]);
        return rows;
      } catch (e) {
        console.log(e);
        return null;
      }

},
registermother:async (data)=>{
    try {
        const rows = await query(userquery.registermother, [data]);
        return rows;
      } catch (e) {
        console.log(e);
        return null;
      }
}}
module.exports=userservice