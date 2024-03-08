const query =require("../config/db")
const userquery=require("../queries/users.queries")

const userservice={
    
    getAlluser:async(data)=>{
        try {
    const row=await query(userquery.getuserquery,[data])
    return row
  }
  catch (error) {
    throw error
  }   
}
}
module.exports=userservice