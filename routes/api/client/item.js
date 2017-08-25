const express = require('express');
const router = express.Router();
const Item = require('../../../models/item');

//to create new item 
router.post('/', (req, res, next) => {
    let item = new Item({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        price: req.body.price,
        service_provider: req.body.service_provider

    });
    Item.addItem(item, (err, item) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, msg: "Successfully registered" });
        }
    })
});
// to get all the items for a single service provider
router.get('/', (req, res, next) => {
    let items = Item.getAll((err, items) => {
        if (err) {
            console.log(err)
        }
        res.json({ success: true, items: items })
    });

});
//to get items by type
router.get('/type/:type', (req, res, next) => {
    let items = Item.findByType(req.params.type, (err, items) => {
        if (err) {
            console.log(err)
        }
        res.json({ success: true, items: items })
    });

});
// to get single item by id
router.get('/:id', (req, res, next) => {

    let item = Item.getItem(req.params.id, (err, item) => {
        if (err) {
            console.log(err);
        }
        res.json({ success: true, item: item });
    });

});
//update single item properties
router.put('/:id', (req, res, next) => {

    let item = Item.getItem(req.params.id, (err, item) => {
        if (err) {
            console.log(err);
        }
        item.name = req.body.name;
        item.price = req.body.price;
        item.description = req.body.description;
        item.type = req.body.type;
        Item.update(item, (err, item) => {
            if (err) {
                console.log(err);
            }

            res.json({ success: true, item: item });
        })
    });

});
router.delete('/:id', (req, res, next) => {
    Item.delete(req.params.id, (err, item) => {
        if (err) {
            console.log(err);
        }
        res.json({ success: true, msg: "Item deleted Successfully." });
    });
});
module.exports = router;