const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    // Add any other fields you need for users
});

const User = mongoose.model('User', userSchema);

module.exports = User;
