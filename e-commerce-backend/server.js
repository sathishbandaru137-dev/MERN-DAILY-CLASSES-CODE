const express=require("express")
const app=expess();
const env=require("dotenv")
const connection=require("./config/database)")
env.config();
connection();

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("server running on:",PORT);
}


);