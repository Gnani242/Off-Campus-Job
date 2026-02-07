import { Briefcase, MapPin, DollarSign } from 'lucide-react';

export default function JobCard({ job, onApply }) {
    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{job.title}</h3>
                    <p style={{ color: 'var(--text-light)' }}>{job.company}</p>
                </div>
                {job.matchScore && (
                    <div style={{
                        backgroundColor: '#dbeafe', color: '#1e40af',
                        padding: '0.25rem 0.5rem', borderRadius: '0.25rem',
                        fontWeight: 'bold', fontSize: '0.875rem'
                    }}>
                        {job.matchScore}% Match
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={16} /> {job.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <DollarSign size={16} /> {job.salary}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Briefcase size={16} /> {job.type}
                </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {job.skills.map((skill, i) => (
                    <span key={i} style={{
                        backgroundColor: '#f1f5f9', padding: '0.125rem 0.5rem',
                        borderRadius: '0.25rem', fontSize: '0.75rem',
                        color: '#475569'
                    }}>
                        {skill}
                    </span>
                ))}
            </div>

            <button
                onClick={() => onApply(job.id)}
                className="btn btn-primary"
                style={{ marginTop: 'auto', width: '100%' }}
            >
                Apply Now
            </button>
        </div>
    );
}
