const express=require('express')
const {AdminController} =require ('../controllers/Admincontrol')
const router =express.Router();




router.post('/adminregister',AdminController)

module.exports=router