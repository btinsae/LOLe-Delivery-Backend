let mongooes=require('mongooes');
let userSchema=mongooes.Schema({
	first_name:{
		type:String,
		required:true
	},
	last_name:{
		type:String,
		required:true
	},
	profile_img_url:{
		url:String
	}
});
let User=module.exports=mongooes.module('User',userSchema);