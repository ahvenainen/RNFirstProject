const Material = require('../models/material');

exports.createMaterial = (req, res) => {
    console.log('Received a request to create a material');
    const type = req.body.type;
    const amount = req.body.price;
    const price = req.body.price;

    const newMaterial = new Material({ type, amount, price });

    newMaterial.save()
        .then(() => res.json('Material added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getAllMaterials = (req, res) => {
    Material.find()
        .then(materials => res.json(materials))
        .catch(err => res.status(400).json('Error: ' + err));
};
