const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const Application = require('../db/models/Application');

// Get user applications
router.get('/applications', auth, async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.user.userId }).populate('jobId');
        const formatted = applications.map(app => ({
            id: app._id,
            jobTitle: app.jobId.title,
            company: app.jobId.company,
            status: app.status,
            date: app.appliedAt.toISOString().split('T')[0]
        }));
        res.json(formatted);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
