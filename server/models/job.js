import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: String,
  position: String,
  salary: String,
  category: String,
  description: String,
  contact: String,
  application: String
});

const Job = mongoose.model('Job', jobSchema);

export default Job;