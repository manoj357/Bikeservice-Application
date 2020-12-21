const  mongoose =require('mongoose');
const { model } = require('./user');

const ServiceSchema = mongoose.Schema({
    ownername:{
        type:String,
        required:true

    },

    vechilename:{
        type:String,
        required:true
    },
    vechileno:{
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