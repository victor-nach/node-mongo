const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    height: String,
    email:  { type: String, unique: true },
}); 

module.exports = mongoose.model('users', UserSchema);