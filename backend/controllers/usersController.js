const User = require('../models/user');

exports.createUser = (req, res) => {
    console.log('Received a request to create a user. Full request body:', req.body);

    const user = req.body;

    const newUser = new User(user);
    console.log('New user:', newUser);

    newUser.save()
        .then(savedUser => {
            console.log('Saved user:', savedUser);
            res.json('User added!')
        })
        .catch(err => {
            console.error('Error saving user:', err);
            res.status(400).json('Error: ' + err)
        });
};

exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getPopulatedUsers = (req, res) => {
    User.find()
        .populate('project')
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
}
