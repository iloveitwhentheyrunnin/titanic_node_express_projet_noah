import mongoose from 'mongoose'
import { sha256 } from '../utils/utils.js';

const userSchema = new mongoose.Schema({
  name        : { type: String, required: true },
  password    : { type: String, required: true}
});

userSchema.static('createUser',createUser);

async function createUser(name, password) {

  // Hash password
  const passwordHash = sha256(password);

  return await this.create({
    name,
    password: passwordHash,
  });
}


const collectionName = 'users'
export const UsersModel = mongoose.model('Users', userSchema, collectionName)

