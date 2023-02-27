const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    id:{type:String
   },

    imageUrl:{type:String
   },
   firstName:{
       type:String,
       required:true
   },
   lastName:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true,
       format:"email"
   },
   contactNumber:{
       type:   Number,
       required:true
   },
   age:{
       type:Number,
       required:true
   },
   dob:{
       type:String,
       required:true
   },
   salary:{
       type:Number,
       required:true
   },
   address:{
       type:String,
       required:true
   },
});

module.exports = Schema;