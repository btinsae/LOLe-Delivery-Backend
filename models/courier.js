let mongooes = require('mongooes');
let courierSchema = mongooes.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    }

});
let Courier = module.exports = mongooes.module('Courier', courierSchema);
module.exports = Courier;