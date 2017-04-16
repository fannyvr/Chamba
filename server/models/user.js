import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = Schema({
  email: String,
  name: String,
  picture: String,
  nickname: String,
  userId: String,
  jobs: Array
});

const User = mongoose.model('User', userSchema);

export default User;

