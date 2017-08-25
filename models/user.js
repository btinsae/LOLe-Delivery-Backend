const mongooes = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = mongooes.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    profile_img_url: {
        type: String,
        default: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png'
    }
});
const User = module.exports = mongooes.model('User', userSchema);
module.exports.getAll=function (callback) {
  User.findAll(callback);
};
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByUsername = function (username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
};
module.exports.addUser = function (user, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        if(err){
            throw err;
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        user.save(callback);
});
});
};