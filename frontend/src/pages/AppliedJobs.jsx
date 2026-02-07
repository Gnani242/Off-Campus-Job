import { useState, useEffect } from 'react';
import api from '../services/api';
import StatusBadge from '../components/StatusBadge';
import Loader from '../components/Loader';

const DUMMY_APPLICATIONS = [
    { id: 1, jobTitle: 'Frontend Developer', company: 'TechCorp', status: 'Applied', date: '2023-10-25' },
    { id: 2, jobTitle: 'Backend Engineer', company: 'DataSystems', status: 'Interview', date: '2023-10-20' },
    { id: 3, jobTitle: 'Full Stack Intern', company: 'StartupX', status: 'Rejected', date: '2023-10-15' },
];

export default function AppliedJobs() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                // const res = await api.get('/status/applications'); setApplications(res.data);
                setTimeout(() => {
                    setApplications(DUMMY_APPLICATIONS);
                    setLoading(false);
                }, 800);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchApplications();
    }, []);

    if (loading) return <Loader />;

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Application History</h2>
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                        <tr>
                            <th style={{ padding: '1rem', fontWeight: '600', color: '#64748b' }}>Job Title</th>
                            <th style={{ padding: '1rem', fontWeight: '600', color: '#64748b' }}>Company</th>
                            <th style={{ padding: '1rem', fontWeight: '600', color: '#64748b' }}>Date</th>
                            <th style={{ padding: '1rem', fontWeight: '600', color: '#64748b' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '1rem' }}>{app.jobTitle}</td>
                                <td style={{ padding: '1rem', color: '#64748b' }}>{app.company}</td>
                                <td style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>{app.date}</td>
                                <td style={{ padding: '1rem' }}>
                                    <StatusBadge status={app.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
