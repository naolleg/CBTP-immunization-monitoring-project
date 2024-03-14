const childService=require("../services/child.services")

const childcontroller={

    getchild:async()=>{
        const result=await childService.getchild()
        return result
    },
    postchild:async(data)=>{
        const result=await childService.postchild(data)
        return result
    }
}