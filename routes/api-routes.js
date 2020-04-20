const router = require("express").Router();
const Workout = require("../models/WorkoutDB.js");

//get last workout
router.get("/api/workouts", (req , res) => {
    Workout.find({})
    .then(dbWorkout => {
        // console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// add new workout
router.post("/api/workouts", ({ body } , res) => {
    // console.log({ body })
    Workout.create({})
    .then(workout => {
        console.log(workout)
        res.json(workout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// adding exercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate({ _id: params.id }, {$push: {exercises: body}}, {new: true})
    .then(workout => {
        // console.log(workout)
        res.json(workout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// to generate stats
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        // console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router