const Project = require('../models/project');

exports.createMaterial = (req, res) => {
    console.log('Received a request to create a project');
    const name = req.body.name;

    const newProject = new Project({ name });

    newProject.save()
        .then(() => res.json('Project added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getAllProjects = (req, res) => {
    Project.find()
        .then(materials => res.json(materials))
        .catch(err => res.status(400).json('Error: ' + err));
}
