const express=require('express')
const Admin =require('../../models/admin')
const bcrypt=require('bcryptjs');
const jwt = require('express-jwt');

const router =express.Router();




router.post('/adminregister',async (req,res)=> {
   
    try {
       var emailExist=await Admin.findOne({email})
        if(emailExist) {
            return res.status(400).json("email already exists")
        }
        var hash =await bcrypt.hash(req.body.password,10);
     var admin=new Admin({
            name:req.body.name,
            email:req.body.email,
            password:hash
        })
     var data =await admin.save();
        
    } catch (err) {
        res.json(err)
        
    }
    res.json(data)
})

router.post('/adminlogin',async(req,res)=> {
    try {
        var adminData=await Admin.findOne({email:req.body.email})
        if(!adminData) {
            return res.status(400).json("email already exists")
        }
        const validpass=await bcrypt.compare(req.body.password,adminData.password)

        if(!validpass){
            return res.status(400).json("password not vailid")
        }
        var token =await jwt.sign({email:Admindata.email},process.env.JWT_SECRET);

        res.headers('auth',token).send(token)
        
    } catch (err) {
        res.status(400).json(err);
        
    }
})

module.exports=router