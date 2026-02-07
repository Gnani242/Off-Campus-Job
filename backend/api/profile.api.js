const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const Profile = require('../db/models/Profile');

// Get current user profile
router.get('/', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.userId });
        if (!profile) return res.status(404).json({ message: 'Profile not found' });
        res.json(profile);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Create or update profile (simplified without file upload logic detail)
router.post('/', auth, async (req, res) => {
    const { skills, education, experience, resumeUrl } = req.body;
    try {
        let profile = await Profile.findOne({ userId: req.user.userId });
        if (profile) {
            profile.skills = skills || profile.skills;
            profile.resumeUrl = resumeUrl || profile.resumeUrl;
            await profile.save();
        } else {
            profile = new Profile({
                userId: req.user.userId,
                skills,
                resumeUrl
            });
            await profile.save();
        }
        res.json(profile);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.post('/upload-resume', auth, async (req, res) => {
    // Mock upload
    res.json({ message: 'Resume uploaded successfully (mock)' });
});

module.exports = router;
