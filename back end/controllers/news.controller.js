const newsService=require("../services/news.services")
const db=require("../config/db")
const newscontroller = {
  getNews: async (req, res) => {
    const result = await newsService.getnews();
    // console.log(result);
    return res.status(200).json({
      success: true,
      data: result,
    });
  },
  postNews: async (req, res) => {
    const{
      title,description
    }=req.body
    if(!title || !description){
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }
    const image = req.file.filename;
    const sql = "updte News set image = ? ";
    db.query(sql, [image], (error, result) => {
      if (error) {
        // Handle the error appropriately
        return res.status(500).json({
          success: false,
          error: "An error occurred while inserting the news.",
        });
      }
      return res.status(200).json({
        success: true,
        data: result,
      });
    });
  },
};

module.exports=newscontroller