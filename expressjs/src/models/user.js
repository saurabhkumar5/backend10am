
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    emailId:{
        type:String
    },
    mob:{
        type:Number
    },
    password:{
        type: String
    },
    age:{
        type: String
    },
    gender:{
        type:String
    }
})

const User = mongoose.model('user',userSchema)
module.exports = User;