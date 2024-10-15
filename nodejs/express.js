const express  = require('express');
const mongoose = require('mongoose')
const app  = express();



app.use(express.json());
// crud 
// c = create
// r = read
// u = update
// d = delete





mongoose.connect('mongodb://localhost:27017/teacher')
        .then(()=>console.log("database is connected"))
        


      const  userSchema =  new mongoose.Schema({

                          name:String,
                          age:Number,
                          address:String
                     })

               const Model = mongoose.model('batch',userSchema)      


         //post method      

      app.post('/teacher',(req,res)=>{

               const data = req.body;
        //        console.log(data)
                //   const value  = new Model({name:"aman"})
                //       value.save();
                const value  = new Model(data)
                      value.save();
               res.send("hello from teacher path")
      }) 
      
      //get method

      app.get('/teacher',(req,res)=>{
          
                Model.find({})
                      .then((data)=>{
                        res.send(data)
                      })               
        
      })

      app.get('/teacher/:id',(req,res)=>{
                
            const value  =  req.params.id
        //     console.log(value)
                  Model.findById(value)
                       .then((data)=>{
                        //  console.log(value)
                        res.send(data)

                       
                       })
      })

      app.put('/teacher/:id',(req,res)=>{
                const id   = req.params.id
                const data = req.body
                console.log(data)
                //   console.log(id)
                 
                    Model.findByIdAndUpdate(id,data)
                          .then((value)=>{
                                res.send(value)
                          })
      })


      app.delete('/teacher/:id',(req,res)=>{
                  
                      const id = req.params.id;
                            Model.findByIdAndDelete(id)
                                 .then((data)=>{
                                        res.send("your account is deleted successfully")
                                 })
      })

app.get('/tv',(req,res)=>{
              
        res.send("hello from bbackend")
})

app.get('/tanpreet',(req,res)=>{
            
            //1. params
        //     2. query
        //     3. body
          
                   const name  = req.query.name;
                        console.log(name)
                    if(name=="saurabh"){
                        res.send("makke ki roti and sarso k saag")
                    }
              
                     res.send(`${name}  not eligible for makke roti`)
            
})


// app.get('/sandeep',(req,res)=>{

//         res.send("its sandeep instagram account")
// })

// app.get('/apple',(req,res)=>{

//         res.send("its apple instagram account")
// })

app.get('/twitter/:id',(req,res)=>{
                
                //      console.log(req.params)
                   const name  = req.params.id
                   console.log(name)
        res.status(200).send(`its ${name} twitter account`)
})

app.post('/home',(req,res)=>{
               const data = req.body;
               console.log(data)
        res.status(200).send("its your home design")
})

app.get('/instagram',(req,res)=>{
               
                   console.log(req.body)
        res.status(200).send("its instagra account")
})

app.get('/saurabhmaurya_5',(req,res)=>{
        res.send("its saurabh twitter acount")
})

app.get('/home/kitchen',(req,res)=>{

        // res.send("hello from backend from home");
        res.send({name:"komal"});
});

app.get('/annu',(req,res)=>{
        res.send("hello from annu side")
})

app.post('/about',(req,res)=>{

        res.send("hello from post method")
})

app.put('/update',(req,res)=>{

        res.send("your update is successfully")
})

app.delete('/contact',(req,res)=>{

        res.send("your photo is deleted successfully")
})



app.get('*',(req,res)=>{

        res.send("Something went wrong")
})

 app.listen(5500,()=>console.log("server is started"));