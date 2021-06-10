const express = require("express");
const datas = require("./model");
const router = express.Router();


router.get("/:id", (req,res,next)=>{

})


router.use((err,req,res,next)=>{
    res.status(err.status||500).json({
        str:"Something went wrong",
        message:err.message
    })
})

module.exports = router;