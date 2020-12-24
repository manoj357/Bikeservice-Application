const router =require('express').Router();
   const nodemailer =require('nodemailer');

   router.post('/servicedone',(req,res)=> {

//sending bike ready for delivery


const transporter=nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:process.env.EMAIL_FROM,
    pass:process.env.PASSWORD

  }
})



var email = req.body.email
var message = req.body.message
var content = ` \n email: ${email} \n message: ${message} `

var mail = {
from: process.env.EMAIL_FROM,
to: email, 
subject: 'New Message from AUTOSPAREZ Contact Form',
text: content
}

transporter.sendMail(mail, (err, data) => {
if (err) {
res.json({
  msg: 'fail'
})
} else {
res.json({
  msg: 'success'
})
}
})
})

   module.exports=router;