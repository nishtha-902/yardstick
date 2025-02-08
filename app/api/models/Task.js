import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  completed: Boolean,
});

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);
export default Task;