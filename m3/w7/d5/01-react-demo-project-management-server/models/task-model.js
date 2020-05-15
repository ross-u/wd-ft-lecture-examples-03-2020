//      models/task-model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE THE SCHEMA
const taskSchema = new Schema({
  title: String,
  description: String,
  project: { type: Schema.Types.ObjectId, ref: 'Project' }
})

// CREATE MODEL
const Task = mongoose.model('Task', taskSchema);

// EXPORT THE MODEL
module.exports = Task;