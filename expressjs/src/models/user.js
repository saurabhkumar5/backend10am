
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    usernaam:{
        type:String,
    },
    emailid:{
        type:String
    },
    password:{
        type: String
    },
 
})

const User = mongoose.model('user',userSchema)
module.exports = User;