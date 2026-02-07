import { useState, useEffect } from 'react';
import api from '../services/api';
import JobCard from '../components/JobCard';
import Loader from '../components/Loader';

const DUMMY_JOBS = [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', salary: '$60k-80k', type: 'Full-time', skills: ['React', 'CSS', 'JS'], matchScore: 95 },
    { id: 2, title: 'Backend Engineer', company: 'DataSystems', location: 'New York', salary: '$90k-120k', type: 'Full-time', skills: ['Node.js', 'Express', 'MongoDB'], matchScore: 88 },
    { id: 3, title: 'Full Stack Intern', company: 'StartupX', location: 'San Francisco', salary: '$40k-60k', type: 'Internship', skills: ['React', 'Node.js', 'Typescript'], matchScore: 92 },
];

export default function Dashboard() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                // const res = await api.get('/jobs/recommended'); setJobs(res.data);
                setTimeout(() => {
                    setJobs(DUMMY_JOBS);
                    setLoading(false);
                }, 1000); // Simulate network delay
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const handleApply = async (jobId) => {
        try {
            // await api.post('/apply/start', { jobId });
            alert(`Applied to job ${jobId}`);
        } catch (err) {
            alert('Failed to apply');
        }
    };

    if (loading) return <Loader />;

    return (
        <div>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Recommended Jobs for You</h1>
                <p style={{ color: 'var(--text-light)' }}>Based on your profile and preferences.</p>
            </header>

            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} onApply={handleApply} />
                ))}
            </div>
        </div>
    );
}
