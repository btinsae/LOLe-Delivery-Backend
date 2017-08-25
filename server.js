const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');


//Bring in models
//const Item = require('./models/item');

 mongoose.connect("mongodb://localhost/lole",{
 	  useMongoClient: true,
 });
 mongoose.Promise=global.Promise;

const db =mongoose.connection;
//check for any db error
db.on('error', console.error.bind(console, 'connection error:'));

//check if db is connected
db.once('open',()=>{
console.log('connected');
});
//app init
const app = express();

//to parse the incoming json body
app.use(bodyParser.json());

//to cross site resource request
app.use(cors());

//initializing routes
// app.use('/api', require('./routes/api/client/request'));
//
// //user related URL
app.use('/user', require('./routes/api/client/user'));
//service provider related URLs
app.use('/service_provider', require('./routes/api/client/service_provider'));
//Items related URLs
app.use('/item',require('./routes/api/client/item'));

app.use(passport.initialize());
app.use(passport.session());


//listen for request
app.listen(4000, () => {
    console.log('Server started......');
});