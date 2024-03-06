const userservice=require("../services/users.servces")
const usercontroller={

getuser:async(data)=>{
    const getusers=await userservice.getAlluser
    return getusers;
}


}
module.exports=usercontroller