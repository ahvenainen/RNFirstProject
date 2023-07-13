require('dotenv').config();
console.log(process.env.MONGODB_URI);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const materialsRouter = require('./routes/materials');
const hoursRouter = require('./routes/hours');

// This line should be at the top, before any route definitions
require('express-async-errors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB...');

        // Start the Express server after the database connection is established
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/materials', materialsRouter);
app.use('/api/hours', hoursRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
