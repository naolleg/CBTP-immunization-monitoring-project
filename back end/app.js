const express=require("express");
const env=require("dotenv");
const cors=require("cors");
const appRoute=require("./routes/index.routes")
const app=express();
env.config();
//middle ware

//Enable CORS middleware before setting up routes
const corsOptions = {
    origin: true,
    credentials: true,
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use(appRoute);


app.listen(process.env.SERVER_PORT,process.env.SERVER_HOST,(error)=>{
    if(error) throw error;
    else console.log(`server is running on  http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})

