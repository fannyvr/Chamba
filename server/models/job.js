import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: String,
  position: String,
  salary: String
});

const Job = mongoose.model('Job', jobSchema);

export default Job;