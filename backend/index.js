const express = require('express');
const connectDB = require('./db/connect');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database
connectDB();

// Routes
app.use('/api/auth', require('./api/auth.api'));
app.use('/api/profile', require('./api/profile.api'));
app.use('/api/jobs', require('./api/jobs.api'));
app.use('/api/apply', require('./api/apply.api'));
app.use('/api/status', require('./api/status.api'));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
