const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

module.exports = mongoose.model('Project', projectSchema);
