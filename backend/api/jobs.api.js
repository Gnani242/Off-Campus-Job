const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const Job = require('../db/models/Job');

// Get recommended jobs (mock logic for "match")
router.get('/recommended', auth, async (req, res) => {
    try {
        // Real logic: Fetch user profile, extract skills, query jobs with matching skills
        // Mock logic: Return all jobs
        const jobs = await Job.find().limit(20);
        res.json(jobs);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
