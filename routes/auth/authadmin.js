const express=require('express')
const {AdminContoller} =require ('../controllers/Admincontrol')
const router =express.Router();




router.post('/register',AdminContoller)

module.exports=router