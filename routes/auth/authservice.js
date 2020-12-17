const express=require('express')
const {serviceControl} =require('../controllers/servicecontrol')
const router =express.Router();




router.post('/service/',serviceControl)

module.exports=router