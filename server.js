const express=require('express');
const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost/maoo');

let db=mongoose.connection;

//check for connection
db.once('open',()=>{
	console.log("connected to mongodb.....");
})

//check for database error
db.on('error',(err)=>{
	console.log(err);
});

//app init
const app=express();

//initializing routes
app.use('/api',require('./routes/api/client/request'));

//Bring in models
let Item=require('./models/item');




//listen for request
app.listen(env.process.port| 3000,()=>{
	console.log('Server started......');
});