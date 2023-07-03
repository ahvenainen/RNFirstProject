const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    price: Number,
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;