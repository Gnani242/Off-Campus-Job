const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    status: { type: String, enum: ['Pending', 'Applied', 'Rejected', 'Interview'], default: 'Pending' },
    appliedAt: { type: Date, default: Date.now },
    notes: String
});

module.exports = mongoose.model('Application', ApplicationSchema);
