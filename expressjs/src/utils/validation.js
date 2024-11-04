
const validator = require('validator')
 const validateSignup = (req)=>{
         const {name,username,password,emailid} = req.body;

         if(!name || !username){
            throw new Error("name or username is not valid")
        }else if(!validator.isEmail(emailid)){
           throw new Error("email is not valid")
        }else if(!validator.isStrongPassword(password)){
           throw new Error("guys strong password enter karo")
        }
 }

 module.exports = {
    validateSignup
 }