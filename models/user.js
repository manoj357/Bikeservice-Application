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
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
module.exports =mongoose.model("user",UserSchema);
