const addCollage = require("../controller/collagecontroller");

const express=require("express")
const router=express.Router() 
router.post("/add-collage",addCollage)
module.exports=router;