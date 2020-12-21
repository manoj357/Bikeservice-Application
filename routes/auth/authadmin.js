const router =require('express').Router();
const Admin=require('../../models/admin')
const bcrypt =require('bcryptjs')






router.post('/adminregister', async(req,res)=> {
    const{name,email,password}=req.body;
 const  admin =  new Admin({name,email,password});

 admin.save(
      
    function (err){
        if(err){
            console.log(err)
        }
    else{
        console.log('added sucessfully')
    }
           
    })

   
})

router.post('/adminlogin',async(req,res)=> {
    try {
        var AdminData =await Admin.findOne({email:req.body.email})
        if(!AdminData) {
            return res.status(400).json("email not found")
        }
        var validpassword=await bcrypt.compare(req.body.password,AdminData.password)
        if(!validpassword){
            return res.status(400).json('password invalid')
        }
       var userToken=await jwt.sign({
            email:AdminData.email
        },process.env.JWT_SECRET
        );
        res.header('auth',userToken).send(userToken)
        
    } catch (err) {
        res.status(400).json(err);
        
    }

})
const validAdmin=(req,res,next)=> {
    var token=req.header('auth')
    req.token=token;
    next();
}

router.get('/admingetall',validAdmin,async(req,res)=> {
    jwt.verify(res.token,process.env.JWT_SECRET,async (err,data)=>{
        if(err) {
            res.sendStatus(403)
        }
        else
        {
            const data= await User.find();
            res.json(data);

        }
    })
  

})


  

module.exports =router;