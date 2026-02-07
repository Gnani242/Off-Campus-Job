const { Queue } = require('bullmq');

const jobQueue = new Queue('JobQueue', {
    connection: {
        host: 'localhost',
        port: 6379 // Redis port
    }
});

module.exports = jobQueue;
