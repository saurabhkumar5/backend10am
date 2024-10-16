const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user')

const app = express();

app.use(express.json())



app.post('/signup',(req,res)=>{
       const {fullname,username,password,emailid} = req.body;
       console.log(fullname,username,password,emailid)

               const name   = fullname.trim();
               const usernaam   = username.trim();

              

            //    if(
            //     [fullname,username,password,emailid].some((value)=>{
            //         value?.trim()==""
            //     })
            // ){

            //    }

       const user  = new User({name,usernaam,password,emailid})
       user.save();


    res.send("signup successfully")
})



connectDB
 .then(()=>{
    console.log("database is connected")
    app.listen(6000,()=>console.log("server is running on port 6000"))
 })



