const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    materials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material' }],
    hours: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hour' }],
})

module.exports = mongoose.model('User', userSchema);
