// console.log("hello backen");
// const code = 5;
// console.error('error #%d', code);

// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);


const os = require('os');

//    console.log(os.type());

// console.log(os.platform())
// console.log(os.machine())
// console.log(os.hostname())
// console.log(os.arch())
// console.log(os.cpus());
// console.log(os.freemem())
// console.log(os.loadavg())
// console.log(os.networkInterfaces())
// console.log(os.release())
// console.log(os.totalmem())
// console.log(os.type())
// console.log(os.uptime())
// console.log(os.version())



const http = require('http');

 const app = http.createServer((req,res)=>{
        
             
           res.end("hello from server side i am very happy today")
 })

 app.listen(4000,()=>{
      console.log("server is started")
 })