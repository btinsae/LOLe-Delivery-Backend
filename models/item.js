let mongoose = require('mongoose');
const Schema = mongoose.Schema;
let itemSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    service_provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceProvider'
    },
    price: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        default: "http://sulaindianrestaurant.com/wp-content/uploads/2013/07/menu-placeholder.gif"

    },
    comment: {
        author: String,
        date: {
            type: Date,
            default: Date.now
        },
        content: String
    },
    rating: {
        type: Number
    }
});
const Item = module.exports = mongoose.model('Item', itemSchema);
module.exports = Item;

//to add an Item
module.exports.addItem = function(item, callback) {
    item.save(callback);
};
//to get item by id
module.exports.getItem = function(id, callback) {
    Item.findById(id, callback);
};
module.exports.getAll = function(callback) {
    Item.find(callback);
};
module.exports.delete = function(id, callback) {
   Item.findById(id).remove(callback);
  

};

// to update the item 
module.exports.update = function(item, callback) {
    let i = Item.findById(item._id);
    i = item;
    i.save(callback);
};
module.exports.findByType = function(type, callback) {
    Item.find({ 'type': { $regex: '.*' + type + '.*' } }, callback);
}