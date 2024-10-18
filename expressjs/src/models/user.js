
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minLength:3,
        maxLength:25,

    },
    username:{
        type:String,
        trim:true,
        required:true,
        minLength:3,
        maxLength:25,
        lowercase:true,
        unique:true,
    },
    emailid:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type: String,
        required:true,
    },

 
},{timestamps:true})

const User = mongoose.model('user',userSchema)
module.exports = User;