

const adminAuth = (req,res,next)=>{
    console.log(req.query)
   const value = req.query.pass;
   if(value==123){
           next()
   }else{
       res.send("your password is incorrect")
   }
     console.log("hello user")
   next()
}

module.exports = {
    adminAuth
}