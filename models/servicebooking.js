const  mongoose =require('mongoose');
const { model } = require('./user');

const ServiceSchema = mongoose.Schema({
    Ownername:{
        type:String,
        required:true

    },

    Vechilename:{
        type:String,
        required:true
    },
    Vechilenumber:{
        type:Number,
        

    },
    servicetype:{
        type:String,
        required:true
    },
    
    Createdate:{
        type:String,
        default:Date.now
    }
})
module.exports= mongoose.model("service", ServiceSchema)