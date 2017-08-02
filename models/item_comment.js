let mongooes = require('mongoose');
const itemCommentSchema = mongooes.Schema({
    comment: {
        type: String
    },
    user: {
        type: String
    },
    item: {
        type: String
    }
});

let ItemComment = mongooes.model('ItemComment', itemCommentSchema);
module.exports = ItemComment;