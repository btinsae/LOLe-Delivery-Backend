const express = require('express');
const router = express.Router();
const ServiceProvider = require('../../../models/service_provider');
const passport = require('passport');

router.post('/', (req, res, next) => {
    var arr = req.body.working_dates.toString().split(',');
   
    let service_provider = new ServiceProvider({
        name: req.body.name,
        address: {
            city: req.body.city,
            street: req.body.street,
            house_no: req.body.house_no
        },
       
            working_dates: [arr]
       


        ,
        working_hours: {
            from: req.body.working_hours.working_hour_from,
            to: req.body.working_hours.working_hour_to
        },
        desc: req.body.desc,
        password: req.body.password,
        geometry: {
            //type:req.body.geometry.type,
            coordinates: [req.body.geometry.coordinates[0], req.body.geometry.coordinates[1]]
        }

    });
    ServiceProvider.addServiceProvider(service_provider, (err, service_provider) => {
        if (err) {
            res.json({ success: false, msg: "Failed to register" });
        } else {
            res.json({ success: true, msg: "Successfully registered" });
        }
    });
});
router.get('/', (req, res, next) => {
    let service_provider = ServiceProvider.getServiceProviders((err, service_provider) => {
        res.json(service_provider);
    });

});
router.get('/:id', (req, res, next) => {

});
router.post('/authenticate', (req, res, next) => {

});
module.exports = router;