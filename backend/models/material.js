const mongoose = require('mongoose');

const materialSchema = newMongoose.Schema({
    name: String,
    amount: Number,
    price: Number,
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;