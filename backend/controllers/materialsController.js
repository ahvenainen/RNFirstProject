const Material = require('../models/material');

exports.createMaterial = (req, res) => {
    console.log('Received a request to create a material', req.body);

    const material = req.body;

    const newMaterial = new Material(material);

    newMaterial.save()
        .then(() => res.json('Material added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getAllMaterials = (req, res) => {
    Material.find()
        .then(materials => res.json(materials))
        .catch(err => res.status(400).json('Error: ' + err));
};
