const User= require('../../models/user');
const {genSalt,hash} =require('bcryptjs');
const {validationResult}=require('express-validator')
const jwt = require('jsonwebtoken');
const nodemailer =require('nodemailer');




exports.Logincontrol = (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    User.findOne({
      email
    }).exec((err, user) => {
      if (user) {
        return res.status(400).json({
          errors: 'Email is taken'
        });
      }
    });

    //activation token
    const token = jwt.sign(
      {
        name,
        email,
        password
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: '5m'
      }
    );


    //activation link using nodemailer

    const transporter=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:process.env.EMAIL_FROM,
        pass:process.env.PASSWORD

      }
    })
    const emailData = {
      from: 'manojprabakarrr5@gmail.com',
      to: email,
      subject: 'Account activation link',
      html: `
                <h1>Please use the following to activate your account</h1>
                <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                <hr />
                <p>This email may containe sensetive information</p>
                <p>${process.env.CLIENT_URL}</p>
            `
    };

    transporter
      .sendMail(emailData)
      .then(sent => {
        return res.json({
          message: `Email has been sent to ${email}`
        });
      })
      .catch(err => {
        console.log(err)
        return res.status(400).json({
          success: false,
          message:`error`
         
        });
      });
  }
};

//activating account with link

exports.Activecontroller=(req,res)=> {
  const {token}=req.body;
  if(token) {
    jwt.verify(token,process.env.JWT_ACCOUNT_ACTIVATION,(err,decode)=> {
      if(err) {
        console.log('activation error')
        return res.status(401).json({
          errors:'expired link,Signup again'
        })
      }
      else
      {
        const{name,email,password}=jwt.decode(token);
        console.log(email);
        const user = new User({
          name,
          email,
          password
        })

        user.save((err,user)=> {
          if(err) {
            console.log(`save error ${err}`)
            return res.status(401).json({
              errors:(err)
            })
          }
          else {
            return res.json({
              success:true,
              message:user,
              message:'signup success'
            })
          }
        })


      }
    })
    
  }
  else{
    return res.json({
      message:'error happening please try again'
    })
  }
}
