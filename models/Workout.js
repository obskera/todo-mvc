const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
  WorkoutName: {
    type: String,
    required: true,
  },
  reps: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  partial: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Workout', WorkoutSchema)
