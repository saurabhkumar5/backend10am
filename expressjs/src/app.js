const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user')

const app = express();

app.use(express.json())



app.post('/signup',(req,res)=>{
       const {name,username,password,emailid} = req.body;
     
       const user  = new User({name,username,password,emailid})
       user.save()
       res.send("signup successfully")
})



connectDB
 .then(()=>{
    console.log("database is connected")
    app.listen(6000,()=>console.log("server is running on port 6000"))
 })



