//      routes/task-routes.js
const express = require('express');
const taskRouter = express.Router();

const Project = require('./../models/project-model');
const Task = require('./../models/task-model');



// GET     '/api/tasks/:taskId'   => to retrieve a specific task
taskRouter.get('/tasks/:taskId', (req, res, next) => {
  const { taskId } = req.params; // this value is coming from the URL

  Task.findById(taskId)
    .then((foundTask) => {
      res.status(200).json(foundTask)
    })
    .catch((err) => {
      res.status(500).json(err)
    });
})


// taskRouter.get('/projects/:projectId/tasks/:taskId', (req, res, next ) => {
//   const { projectId, taskId } = req.params;

//   Task.findOne({ _id: taskId, project:projectId})
// .then( (foundTask) => {
//   res.status(200).json(foundTask)
// })
// .catch( (err) => {
//   res.status(500).json(err)
// });
// })



// POST     '/api/tasks'      => to create a new task
taskRouter.post('/tasks', (req, res, next) => {
  // how does the message body need to look
  const { title, description, project } = req.body; // These values are the HTTP POST request body

  Task.create({ title, description, project })
    .then((newTask) => {
      // Add the task to the corresponding project
      Project.findByIdAndUpdate(project, { $push: { tasks: newTask._id } })
        .then(() => {
          res.status(201).json(newTask)
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));

})




// PUT '/api/tasks/:id'    => to update a specific task




// DELETE '/api/tasks/:id'     => to delete a specific task


module.exports = taskRouter;