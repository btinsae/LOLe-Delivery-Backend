const express = require('express');
const router = express.Router();
const User = require('../../../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const db=require('../../../config/database');
const bcrypt=require('bcryptjs');
const password_hash=require('../../../config/password_hash');



router.post('/', (req, res, next) => {
    let password=hash_password(req.body.password);
    let user={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password:password ,
        profile_image_url:req.body.profile_image_url
    };
    console.log(user);
user.password=hash_password(user.password);
  let query=  db.query("INSERT INTO USERS SET ?",user,(err , result)=>{
      console.log(query.sql);
        if(err){
            console.log(err);
        }
        console.log(result);
        res.json({success:true,msg:'successfully registered'});
    });

});
router.get('/:id', (req, res, next) => {
    let user=User.getUserById(req.param.id,()=>{
        res.json({user:user});
        });
});
router.post('/authenticate', (req, res, next) => {
    console.log("authentication");
}
);


module.exports=router;