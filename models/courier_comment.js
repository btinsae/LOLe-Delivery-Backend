let mongooes = require('mongoose');
let courierCommentSchema = mongooes.Schema({
    comment: {
        type: String
    },
    user: {
        type: String
    },
    courier:{
        type:String
    }
});
let CourierComment = mongooes.model('CourierComment', courierCommentSchema);
module.exports = CourierComment;