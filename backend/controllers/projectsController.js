const Project = require('../models/project');

exports.createProject = (req, res) => {
    console.log('Received a request to create a project', req.body);

    const project = req.body;

    const newProject = new Project(project);

    newProject.save()
        .then(() => res.json('Project added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getAllProjects = (req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));
}
