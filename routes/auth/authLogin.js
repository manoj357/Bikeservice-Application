const express=require('express')
const {Logincontrol} =require ('../controllers/logincontrol')
const router =express.Router();




router.post('/register',Logincontrol)

module.exports=router