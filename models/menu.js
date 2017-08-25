let mongooes = require('mongoose');

const menuSchema = new mongooes.Schema({
    service_provider: {
        name: String
    }
});
const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    service_provider:{
        t
    },
    type:{
        type:String
    },
    description: {
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
    },
    comment:{
        author:String,
        date:{
            type:Date,
            default:Date.now
        },
        content:String
    },
    rating:{
        type:Number
    }
});
let Menu = mongooes.model('Menu', menuSchema);
module.exports = Menu;