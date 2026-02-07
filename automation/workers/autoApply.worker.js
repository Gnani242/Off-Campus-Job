const { Worker } = require('bullmq');
const linkedinBot = require('../bots/linkedin.bot');

const worker = new Worker('AutoApplyQueue', async (job) => {
    const { platform, jobDetails, userProfile } = job.data;
    console.log(`Starting auto-apply for ${jobDetails.title} on ${platform}`);

    try {
        if (platform === 'LinkedIn') {
            await linkedinBot.apply(jobDetails, userProfile);
        }
        console.log('Application submitted successfully');
    } catch (err) {
        console.error('Failed to apply:', err);
        throw err;
    }
}, {
    connection: { host: 'localhost', port: 6379 } // Redis needed
});

console.log('Auto Apply Worker started...');
