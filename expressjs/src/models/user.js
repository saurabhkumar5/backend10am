
const mongoose = require('mongoose');
const validator = require('validator')

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
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email address:"+value)
            }
        },
    },
    password:{
        type: String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("enter a strong password:"+value)
            }
        },
    },
    age: {
        type: Number,
        min:18,
       
    },
    gender:{
        type: String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("gender is not valid:"+value)
            }
        },
        
    },
    photoUrl:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("invalid photourl:"+value)
            }
        },
    },
    skills:{
        type: [String]
    },
    about:{
        type: String,
        default:"this is default about of the use"
    }

 
},{timestamps:true})

const User = mongoose.model('user',userSchema)
module.exports = User;