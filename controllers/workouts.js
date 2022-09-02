const Workout = require('../models/Workout')
module.exports = {
    //
    getWorkouts: async (req,res)=>{
        console.log(req.user)
        try{
            const workoutItems = await Workout.find({userId:req.user.id})
            const workoutsLeft = await Workout.countDocuments
            //add a find for partial as well
            ({userId:req.user.id,completed: false})
            res.render('workouts.ejs', {workouts: workoutItems, left: workoutsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
  
    // change the rest of these to workout
    // createWorkout: async (req, res)=>{
    //     try{
    //         await Workout.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
    //         console.log('Todo has been added!')
    //         res.redirect('/todos')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}