const express=require('express');
const path=require('path');
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');

let db=mongoose.connection;

//check for connection
db.once('open',()=>{
	console.log("connected to mongodb.....")
})

//check for database error
db.on('error',(err)=>{
	console.log(err);
})

//app init
const app=express();

//Bring in models
let Article=require('./models/article');

//load view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');

app.get('/',(req,res)=>{
	Article.find({},(err,articles)=>{
if (err) {
	console.log(err);
}else{
	res.render('index',{
	articles:articles
});
}

	});

})
app.get('/articles/add',(req,res)=>{
	res.render('add_articles',{
		title:'add',
		
	})
})

app.listen(3000,()=>{
	console.log('Server started......');
})