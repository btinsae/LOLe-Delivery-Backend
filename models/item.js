let mongoose = require('mongoose');
let itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type:{
        type:String
    },
    description: {
        type: String,
        required: true
    },
    service_provider: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
});
let Item = module.exports = mongoose.model('Item', itemSchema);
module.exports=Item;