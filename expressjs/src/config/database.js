const mongoose = require('mongoose');

 const connectDB   = mongoose.connect('mongodb://localhost:27017/part2')
    
     module.exports = connectDB;    