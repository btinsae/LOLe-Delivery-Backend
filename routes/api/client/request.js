let express=require('express');
let router=express.Router();

router.get('/couriers',(req,res)=>{
res.send({type:'GET'});
});
router.post('/',(req,res)=>{
res.send({type:'POST'});	
});
router.put('/',(req,res)=>{
	res.send({type:'PUT'});
});
router.delete('/',(req,res)=>{
	res.send({type:'DELETE'});
});

module.exports=router;