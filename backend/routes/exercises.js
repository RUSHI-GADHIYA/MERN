

const router = require('express').Router();
let User = require('../models/exercise.model');
const Exercise = require("../models/exercise.model");
const { post } = require('./users');
const { get } = require('mongoose');

router.get('/', (req, res) => {
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('error: ' + err));


});

router.post('/add', (req, res) => {

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({

        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json('exercise added'))
        .catch((err) =>
            res.status(400).json('error ' + err));
});

// *******************

router.get('/:id', (req, res) => {

    Exercise.findById(req.params.id)
        .then((exercise) => res.json(exercise))

        .catch(err => res.status(400).json('error: ' + err));

})

router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted!!!'))
        .catch(err => res.status(400).json('error: ' + err));


})
router.post('/update/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {

            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!!!'))
                .catch(err => res.status(400).json('error: ' + err));


        })
        .catch((err) => res.status(400).json('error: ' + err));

});




module.exports = router;