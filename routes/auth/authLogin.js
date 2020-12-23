const express=require('express')

const {Logincontrol,
     activationController,
     signinController,
     forgotPasswordController,
     resetPasswordController,requireSignin} =require ('../controllers/logincontrol')
const{ validSign, validLogin,}=require('../../helper/valid')
const{readController}=require('../controllers/usercontrol')

const router =express.Router();




router.post('/register',validSign,Logincontrol)
router.post('/activate', activationController)
router.post('/forgetpassword', forgotPasswordController)
router.post('/login',validLogin,signinController)
router.post('/resetpassword',resetPasswordController)
router.get('/user/:id', requireSignin, readController);

module.exports=router