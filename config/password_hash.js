const bcrypt=require('bcryptjs');
module.exports.hashPassword=function (password) {
    bcrypt.genSalt(10,(err,salt)=>{
       bcrypt.hash(password,salt,(err,hash)=>{
           if(err){
               console.log(err)
           }
           return hash;
    });
    });

};