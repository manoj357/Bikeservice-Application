const router =require('express').Router();
   const nodemailer =require('nodemailer');

   router.post('/contactus',(req,res)=> {


    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
          user:process.env.EMAIL_FROM,
          pass:process.env.PASSWORD
    
        }
      })
     

    var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'manojprabakarrr5@gmail.com', 
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
   module.exports =router;