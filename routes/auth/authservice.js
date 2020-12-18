const express=require('express')
const {Servicecontrol}=require('../../routes/controllers/servicecontrol')
const router =express.Router();




router.post('/service',Servicecontrol)

module.exports=router

