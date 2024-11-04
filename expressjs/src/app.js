const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');
const { validateSignup} = require('./utils/validation')

const app = express();

app.use(express.json())



app.post('/signup',async(req,res)=>{
       try {
         const {name,username,password,emailid,gender,photoUrl,age,about,skills} = req.body;
     
        validateSignup(req)

       const user  = new User({name,username,password,emailid,gender,photoUrl,age,about,skills})
       await user.save()
       
       res.send("signup successfully")
       } 
       catch (error) {
          res.status(400).send("errorrrr: "+ error.message)
       }
})

app.get('/user',async (req,res)=>{
      
      //  User.find()
      //      .then((data)=>{
      //       res.send(data)
      //      })

         //  const users  = await User.find({})
         //  console.log(users[0]._id)
         //    res.send(users)


               const useremail  =  req.body.emailid;
                // console.log(useremail)
             try {
                       
             const users  = await User.findOne({emailid:useremail})
                if(!users){
                  res.status(400).send("user not found")
                }else{
                  res.send(users)
                }

             } catch (error) {
                res.status(400).send("something went wrong")
             }
})


app.delete('/user',async(req,res)=>{

               const id   = req.body.userId
               try {
                  const user = await User.findByIdAndDelete(id)
                  res.send("user deleted successfully")
               } catch (error) {
                   res.status(400).send("something went wrong")
               }
})

app.patch('/user/:userId',async(req,res)=>{
            
            const userId = req.params.userId;
            const data = req.body;

            
           try {
            await User.findByIdAndUpdate({_id:userId},data)
              res.send("updated successfully")
           } catch (error) {
            res.status(400).send("something went wrong")
           }


}) 





connectDB
 .then(()=>{
    console.log("database is connected")
    app.listen(6000,()=>console.log("server is running on port 6000"))
 })



