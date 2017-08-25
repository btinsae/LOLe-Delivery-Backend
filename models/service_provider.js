const mongooes = require('mongoose');
const bcrypt=require('bcryptjs');
const Schema=mongooes.Schema;
//create geolocation
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

const serviceProviderSchema = mongooes.Schema({
    name: {
        type: String,
        required: [true, 'Name required']
    },
    admin:{
        email:String,
        password:String
    }
    address: {
        city:String,
        street:String,
        house_no:String
    },
    working_dates:{
      type:[String]
    },
    working_hours: {
        from:String,
        to:String
    },
    created_date: {
        type: Date,
        default: Date.now()
    },    
    image_url: {
        type: String,
        default:"http://sulaindianrestaurant.com/wp-content/uploads/2013/07/menu-placeholder.gif"
    },
    desc:{
        type:String
    },

    //add geolocation
    geometry: GeoSchema

});
const ServiceProvider = mongooes.model('ServiceProvider', serviceProviderSchema);
module.exports = ServiceProvider;
//to get all the service providers that are registered to the system
module.exports.getServiceProviders = (callback, limit) =>
{
    ServiceProvider.find(callback).limit(limit);
};
//returns only a single service provider given the id
module.exports.getServiceProviderById = (id, callback) =>
{
    ServiceProvider.findById(id, callback);
};

//creates new service provider account
module.exports.addServiceProvider = (serviceProvider, callback) =>
{    bcrypt.genSalt(10, (err, salt) => {
    if(err){
        throw err;
    }
    bcrypt.hash(serviceProvider.admin.password, salt, (err, hash) => {
    serviceProvider.password = hash;
    serviceProvider.save(callback);

});
    
});
};
module.exports.deleteServiceProvider=(id,callback)=>{
    ServiceProvider.delete
};
module.exports=GeoSchema;