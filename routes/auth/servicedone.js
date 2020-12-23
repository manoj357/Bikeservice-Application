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
 
  const emailData = {
    from: process.env.EMAIL_FROM,
    to: 'manojprabakarr5@gmail.com',
    subject: 'Autospartez vechile services',
    text:'your bike is ready for delivery ,you can pick up at any time.'
  };
  transporter
  .sendMail(emailData)
  .then(sent => {
    return res.json({
      message: `Email has been sent to `
    });
  })
  .catch(err => {
    console.log(err)
    return res.status(400).json({
      success: false,
      message:'error'
     
    })
  })
   })

   module.exports=router;