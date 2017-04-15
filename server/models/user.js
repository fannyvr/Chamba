import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = Schema({
  name: String,
  jobs: Array
});

const User = mongoose.model('User', userSchema);

export default User;

