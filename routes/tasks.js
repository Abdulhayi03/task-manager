const express = require('express')
const router = express.Router()
const {
    getAllTasks, 
    createTask, 
    getTask, 
    deleteTask, 
    updateTask
} = require('../controllers/tasksController')

//get all tasks
router.get('/', getAllTasks)

//post a new task
router.post('/', createTask)

//get a single task
router.get('/:id', getTask)

//update a task
router.patch('/:id', updateTask)

//delete a task
router.delete('/:id', deleteTask)



module.exports = router

