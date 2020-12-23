const Admin =require('../../models/admin')
const router =require('express').Router();
const bcrypt=require('bcryptjs')
const {validationResult}=require('express-validator')
const jwt = require('jsonwebtoken');




router.post('/autosparezregister',async(req,res)=> {
    const{name,email,password}=req.body;
   
    var hash= await  bcrypt.hash(password,10)
 const admin =await new Admin({
    name,
    email,
    password:hash
  });

  await admin.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({
        errors: 'error happened'
      });
    } else {
      return res.json({
        success: true,
        message: admin,
        message: 'Signup success'
      });
    }
  });

   
})


router.post ('/autosparezLogin',(req,res)=> {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    // check if user exist
    Admin.findOne({
      email
    }).exec((err,admin) => {
      if (err || !admin) {
        return res.status(400).json({
          errors: 'User with that email does not exist. Please signup'
        });
      }
      // authenticate
      if (!admin.validate(password)) {
        return res.status(400).json({
          errors: 'Email and password do not match'
        });
      }
      // generate a token and send to admin
      const token = jwt.sign(
        {
          _id: admin._id
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d'
        }
      );
      const { _id, name, email } = admin;

      return res.json({
        token,
        admin: {
          _id,
          name,
          email,
          
        }
      });
    });
  }



})
module.exports=router;