const newsService=require("../services/news.services")

const newscontroller = {
    getNews:async(req,res)=>{
    const result = await newsService.getnews();
   // console.log(result);
    return res.status(200).json({
        success: true,
        data: result
    })
  },
  postNews:async(req,res)=>{
  const {
    tittle,
    description,
  } = req.body;
  if( !tittle ||!description ){
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }
  const result=await newsService.postnews(req.body);
    return res.status(200).json({
        success: true,
        data: result
    })
      },
}
module.exports=newscontroller