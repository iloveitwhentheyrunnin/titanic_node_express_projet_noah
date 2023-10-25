import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name        : { type: String, required: true },
  password    : { type: String, required: true}
});


const collectionName = 'users'
const UsersModel = mongoose.model('Users', userSchema, collectionName)

export default UsersModel