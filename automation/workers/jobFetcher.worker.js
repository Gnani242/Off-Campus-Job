const { Worker } = require('bullmq');
const jobQueue = require('../queues/jobQueue');

const worker = new Worker('JobFetchQueue', async (job) => {
    console.log(`Fetching jobs for search: ${job.data.query}`);
    // Simulate fetching
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Jobs fetched!');
    // Trigger autoApply logic here or add to another queue
}, {
    connection: { host: 'localhost', port: 6379 }
});

console.log('Job Fetcher Worker started...');
