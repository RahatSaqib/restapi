const express= require('express');
const router = express.Router();
const developer=require('../model/devdata');
const mongoose=require('mongoose')
var req = require('request');


   


router.get('/',(req,res,next)=>{
    res.set('Content-Type', 'application/json');
    res.set('URL', 'https://localhost:3000/developer');
    res.set('method', 'GET');
    
        developer.find().then(result=>{
            res.status(200).json({
                DeveloperData:result
            })
        })
            .catch(err=>{
                console.log(err);
                res.status(500).json({
                    error:err
                })
            })
        })
    
       
    


router.post('/', async(req,res,next)=>{

    
    res.set('Content-Type', 'application/json');
    res.set('URL', 'https://localhost:3000/developer');
    res.set('method', 'POST');

   const developerr=new developer({
       _id:new mongoose.Types.ObjectId,
       Name:req.body.Name,
       Designation:req.body.Designation,
       Institution:req.body.Institution,

   })
   developerr.save().then(async result=>{
  
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