const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define a schema for the data
const dataSchema = new mongoose.Schema({
    data: String,
});

// Define a model for the data
const Data = mongoose.model('Data', dataSchema);

// API route to handle the upload
app.post('/upload', (req, res) => {
    const { data } = req.body;

    // Create a new data document
    const newData = new Data({ data });

    // Save the data to the database
    newData.save()
        .then(() => {
            res.status(200).send('Data uploaded successfully');
        })
        .catch(error => {
            res.status(500).send('Error uploading data: ' + error);
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
