const express=require('express')

const {Logincontrol,
     activationController,
     signinController,
     forgotPasswordController,
     resetPasswordController} =require ('../controllers/logincontrol')
const{ validSign, validLogin,}=require('../../helper/valid')
const router =express.Router();




router.post('/register',validSign,Logincontrol)
router.post('/activate', activationController)
router.post('/forgetpassword', forgotPasswordController)
router.post('/login',validLogin,signinController)
router.post('/resetpassword',resetPasswordController)

module.exports=router