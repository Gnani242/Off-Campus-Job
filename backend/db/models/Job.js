const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: String,
    salary: String,
    type: String,
    skills: [String],
    url: String, // Source URL
    source: String, // LinkedIn, Indeed, etc.
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
