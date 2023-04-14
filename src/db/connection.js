const mongoose = require('mongoose');
// to connect to mongodb server

const db = mongoose.connect('mongodb+srv://pawanshah84489:Pawan123@cluster0.d9gwcrf.mongodb.net/test',{
    useNewURLParser : true,
    useUnifiedTopology : true,
    // useCreateIndex : true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log('no Connection' , e);
});

exports.db = db;