const mongoose=require("mongoose")

const connection=async()=>{
    try{
      await  mongoose.connect(process.env.MONGODB_URL);
      console.log("database connected successfully");

    } catch (error){
        console.log("failed to connect database:",err);
    }
}

module.exports=connection;