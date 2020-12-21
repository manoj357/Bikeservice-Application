const mongoose =require('mongoose')
const bcrypt=require('bcryptjs')
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required: true
        

    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },
    
    isactive: {
        type: Boolean,
        default: false,
      },
    Date:{
        type:Date,
        default:Date.now
    },
})


module.exports =mongoose.model("user",UserSchema);
