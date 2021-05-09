const router = require('express').Router();
let Worker = require('../models/worker.model');

router.route('/').get((req,res) => {
    Worker.find()
        .then(workers => res.json(workers))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const mob = req.body.mob;
    const mail = req.body.mail;
    const timeSlot = req.body.timeSlot;
    const salary = Number(req.body.salary);
    const description = req.body.description;
    const occupation = req.body.occupation;
    const newWorker = new Worker({ name, mob, timeSlot, salary, description, mail, occupation });

    newWorker.save()
        .then(()=> res.json('Worker Added!'))
        .catch(err=> res.status(400).json("Error: " +err));
});

module.exports = router;