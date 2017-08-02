let mongooes = require('mongoose');
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
let availableCourier = mongooes.Schema({
    courier: {
        type: String
    },
    geometry: GeoSchema


});
let AvailableCourier = mongooes.model('AvailableCourier', availableCourier);
module.exports = AvailableCourier;