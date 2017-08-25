const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const geoSchema=require('service_provider');



const laundrySchema=Schema({
	close:{

	},
	pick_up_date:{
		type:Date;
	},
	due_date:{
		type:Date;
	},
	total_price:{
		type:Number;
	},
	class:{
		type:String
	},
	status:{
		type:String
	},
	pick_up_location:geoSchema.GeoSchema,
	due_location:geoSchema.GeoSchema
});
module.exports=laundrySchema;