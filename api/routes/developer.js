const express= require('express');
const router = express.Router();
const developer=require('../model/devdata');
const mongoose=require('mongoose')

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message :'GET'
    }
       
    )
})
router.post('/',(req,res,next)=>{
   const developerr=new developer({
       _id:new mongoose.Types.ObjectId,
       Name:req.body.Name,
       Designation:req.body.Designation,
       Institution:req.body.Institution,

   })
   developerr.save().then(result=>{
       console.log(result);
       res.status(200).json({
           newdev: result
       })
   })
   .catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
})
})






module.exports=router;