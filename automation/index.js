require('dotenv').config();
const jobQueue = require('./queues/jobQueue');
require('./workers/jobFetcher.worker');
require('./workers/autoApply.worker');

console.log('Automation System Started');
console.log('Queues initialized. Workers listening...');

// Example: Add a dummy job to queue to test
// jobQueue.add('fetchJobs', { query: 'Software Engineer' });
