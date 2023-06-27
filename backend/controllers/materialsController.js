const Material = require('../models/material');

exports.createMaterial = (req, res) => {
    console.log('Received a request to create a material');
    const name = req.body.name;
    const amount = req.body.amount;
    const price = req.body.price;

    const newMaterial = new Material({ name, amount, price });

    newMaterial.save()
        .then(() => res.json('Material added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getAllMaterials = (req, res) => {
    Material.find()
        .then(materials => res.json(materials))
        .catch(err => res.status(400).json('Error: ' + err));
};
