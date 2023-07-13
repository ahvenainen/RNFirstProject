const Hour = require('../models/hour');

exports.createHour = (req, res) => {
    console.log('Received a request to create a hour', req.body);

    const hour = req.body;

    const newHour = new Hour(hour);

    newHour.save()
        .then(() => res.json('Hours added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getAllHours = (req, res) => {
    Hour.find()
        .then(hours => res.json(hours))
        .catch(err => res.status(400).json('Error: ' + err));
};
