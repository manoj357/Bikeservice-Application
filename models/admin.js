const mongoose =require('mongoose')
const AdminSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
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
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model("Admin",AdminSchema)