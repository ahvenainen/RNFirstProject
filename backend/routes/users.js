const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/create', (req, res) => {
    console.log('Received a request to create a user');
    const name = req.body.name;

    const newUser = new User({ name });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/', (req, res) => {
    User.find()  // Fetch all user documents from the database
        .then(users => res.json(users))  // Send the users as a response
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
