const Collages = require("../model/CollageModel");

//add cpllage
const addCollage=(req,res)=>{
    try{

    
        const {name,code,departments,email,address,url}=req.body;
        const newCollage={
            name:name,
            cocde:code,
            depatments:departments,
            email:email,
            address:address,
            url:url
        }
        await Collages.create(newCollage);
        res.status(500).json({message:"fail to add collage record"})

    
    }
catch (error){
    console.log("error to connect");
}
}