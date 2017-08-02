let mongooes = require('mongoose');

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

let serviceProviderSchema = mongooes.Schema({
    name: {
        type: String,
        required: [true, 'Name required']
    },
    address: {
        city:String,
        street:String,
        house_no:String
    },
    working_dates:{
      days:[String]
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
        type: String
    },
    //add geolocation
    geometry: GeoSchema

});
const ServiceProvider = mongooes.model('ServiceProvider', serviceProviderSchema);
module.exports = ServiceProvider;

module.exports.getServiceProviders = (callback, limit) =>
{
    ServiceProvider.find(callback).limit(limit);
}
module.exports.getServiceProviderById = (id, callback) =>
{
    ServiceProvider.findById(id, callback);
}
module.exports.addServiceProvider = (serviceProvider, callback) =>
{
    ServiceProvider.create(serviceProvider, callback);
}
module.exports.deleteServiceProvider=(id,callback)=>{
    ServiceProvider.delete
}