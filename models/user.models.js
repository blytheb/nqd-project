import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    uid: {type: String, required: true, unique: true}, //Firebase UID
    username: String,
    email: String,
    role: {type: String, default: 'user'}, //'user' or 'admin'


}, {timestamps: true});

export default model('User', userSchema);