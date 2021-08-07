const mongoose=require('mongoose');
const devSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Name: String,
    Designation: String,
    Institution:String
})
module.exports=mongoose.model('DeveloperData',devSchema)