const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const Application = require('../db/models/Application');
const Job = require('../db/models/Job');

// Start application process
router.post('/start', auth, async (req, res) => {
    const { jobId } = req.body;
    try {
        const job = await Job.findById(jobId);
        if (!job) return res.status(404).json({ message: 'Job not found' });

        let application = await Application.findOne({ userId: req.user.userId, jobId });
        if (application) return res.status(400).json({ message: 'Already applied' });

        application = new Application({
            userId: req.user.userId,
            jobId,
            status: 'Pending'
        });
        await application.save();

        // Trigger automation worker here (e.g. add to queue)
        // queue.add({ applicationId: application.id });

        res.json(application);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
