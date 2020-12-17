//const  Admin =require('../../models/admin')

exports.AdminController =(req,res)=>{
    const{name,email,password}=req.body;
    console.log(name,email,password);
}