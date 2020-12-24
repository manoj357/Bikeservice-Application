const Service =require('../../models/servicebooking')
const router =require('express').Router();
const nodemailer =require('nodemailer');




router.post('/service',(req,res)=> {
    const{ownername,vechilename,vechileno,servicetype,email,phno}=req.body;
    const  service =  new Service({ownername,vechilename,vechileno,servicetype,email,phno});
   
 
    

//sending data via email to admin 
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:process.env.EMAIL_FROM,
      pass:process.env.PASSWORD

    }
  })
 
  const emailData = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'Autospartez customer booked for vechileservice',
    text:`vechilename:${vechilename},ownernamee: ${ownername},vechileno: ${vechileno},servicetype:${servicetype},email:${email},phno:${phno}`
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
     
    });
  });
  service.save(
      
    function (err){
        if(err){
            console.log(err)
        }
    else{
        console.log('added sucessfully')
    }
           
    })
})
   

router.get("/servicebooking",  async (req, res) => {
  try {
    const users = await Service.find({}).sort({
      date: -1,
    });
    res.json(users);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});



  module.exports=router;