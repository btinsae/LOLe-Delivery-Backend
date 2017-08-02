let mongooes = require('mongoose');

const menuSchema = new mongooes.Schema({
    service_provider: {
        name: String
    }
});

let Menu = mongooes.model('Menu', menuSchema);
module.exports = Menu;