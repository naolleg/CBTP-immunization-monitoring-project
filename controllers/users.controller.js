const userservice=require("../services/users.services")
const usercontroller={

getuser:async(data)=>{
    const getusers=await userservice.getAlluser
    return getusers;
}


}
module.exports=usercontroller