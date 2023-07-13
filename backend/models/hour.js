const mongoose = require('mongoose');

const hourSchema = new mongoose.Schema({
    hours: Number,
    minutes: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
})

module.exports = mongoose.model('Hour', hourSchema);