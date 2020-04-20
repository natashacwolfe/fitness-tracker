const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter if your workout is cardio or resistance?"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of your exercise?"
            },
            duration: {
                type: Number,
                required: "Please enter how long will your exercise be?"
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});

workoutSchema.set('toJSON', { virtuals: true });

workoutSchema.virtual('totalDuration')
    .get(function () { return this.exercises.reduce((total, exercise) => { return total + exercise.duration }, 0) 
});

const Workout = mongoose.model("workout", workoutSchema);


module.exports = Workout;