const router = require('express').Router();
let Customer = require('../models/customer.model');

router.route('/').get((req,res) => {
    Customer.find()
        .then(customers => res.json(customers))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const mob = req.body.mob;
    const mail = req.body.mail;
    const newCustomer = new Customer({ name , mob, mail });

    newCustomer.save()
        .then(()=> res.json('Customer Added!'))
        .catch(err=> res.status(400).json("Error: " +err));
});

module.exports = router;