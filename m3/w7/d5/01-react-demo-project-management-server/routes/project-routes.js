//      routes/project-routes.js
const express = require('express');
const mongoose = require('mongoose');
const projectRouter = express.Router();

const Project = require('./../models/project-model');
const Task = require('./../models/task-model');


// Helper middleware function
function checkId(req, res, next) {
  const { projectId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res
      .status(400) // Bad Request
      .json({ message: 'Specified id is not valid' })

    return;
  }
  else next()
}


// POST        '/api/projects'    => to post a new projects
projectRouter.post('/projects', (req, res, next) => {
  // get the data from the req.body
  const { title, description } = req.body;

  // save the data in the database
  Project.create({ title, description, tasks: [] })
    .then((createdProject) => {

      res
        .status(201)    // Created
        .json(createdProject)
    })
    .catch((err) => {
      res
        .status(500)  // Internal Server Error
        .json(err)
    });


  // then when saved send back the response
})

// GET        '/api/projects'		 => to get all the projects
projectRouter.get('/projects', (req, res, next) => {
  Project
    .find()
    .populate('tasks')
    .then((allTheProjects) => {
      res
        .status(200)
        .json(allTheProjects);
    })
    .catch((err) => {
      res
        .status(500)
        .json(err);
    });
})

// GET        '/api/projects/:id'		 => to get a specific projects
projectRouter.get('/projects/:projectId', checkId, (req, res, next) => {
  const { projectId } = req.params;
  Project
    .findById(projectId)
    .populate('tasks')
    .then((project) => {
      res
        .status(200)
        .json(project);
    })
    .catch((err) => {
      res.status(500).json(err)
    });
})



// PUT       '/api/projects/:projectId' 		=> to update a specific project
projectRouter.put('/projects/:projectId', checkId, (req, res, next) => {
  const { projectId } = req.params;
  const { description, title } = req.body;

  Project
    .findByIdAndUpdate(projectId, { title, description }, { new: true })
    .then((updatedProject) => {
      res.status(200).json(updatedProject)
    })
    .catch((err) => {
      res.status(500).json(err);
    });
})


// DELETE        '/api/projects/:projectId'   => to delete a specific project
projectRouter.delete('/projects/:projectId', checkId, (req, res, next) => {
  const { projectId } = req.params;

  Project
    .findByIdAndDelete(projectId)
    .then((deletedProject) => {
      res.status(202).json(deletedProject)
    })
    .catch((err) => {
      res.status(500).json(err);
    });
})

module.exports = projectRouter;


// PUT - completely update the resource
// PATCH - partialy updates the resource