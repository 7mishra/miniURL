const mongoose=require('mongoose');

const urlSchema= new mongoose.Schema({
    _id:String,
    id:false,
    url:String,
    minUrl:String,
    createdOn:String,
})

const urlModel=mongoose.model("urlStorage",urlSchema);
module.exports=urlModel;