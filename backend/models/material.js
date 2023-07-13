const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

module.exports = mongoose.model('Material', materialSchema);