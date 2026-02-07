import { useState, useEffect } from 'react';
import api from '../services/api';
import { Upload, FileText } from 'lucide-react';
import Loader from '../components/Loader';

export default function ProfileSetup() {
    const [resume, setResume] = useState(null);
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        // Fetch existing profile
        // const res = await api.get('/profile'); setSkills(res.data.skills);
        setSkills(['JavaScript', 'React', 'Node.js']); // Dummy
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!resume) return;
        setUploading(true);
        const formData = new FormData();
        formData.append('resume', resume);

        try {
            // await api.post('/profile/upload-resume', formData);
            setTimeout(() => {
                setSkills([...skills, 'Python', 'Django']); // Simulated parsing
                setUploading(false);
                setResume(null);
                alert('Resume uploaded and parsed!');
            }, 1500);
        } catch (err) {
            console.error(err);
            setUploading(false);
            alert('Upload failed');
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="card" style={{ maxWidth: '600px', margin: '2rem auto' }}>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText /> Profile & Resume
            </h2>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '2px dashed #cbd5e1', borderRadius: '0.5rem', textAlign: 'center' }}>
                <input
                    type="file"
                    id="resume-upload"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    style={{ display: 'none' }}
                />
                <label htmlFor="resume-upload" className="btn" style={{
                    backgroundColor: '#e2e8f0', color: '#475569',
                    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                }}>
                    <Upload size={18} /> {resume ? resume.name : 'Select Resume (PDF/DOCX)'}
                </label>

                {resume && (
                    <div style={{ marginTop: '1rem' }}>
                        <button
                            onClick={handleUpload}
                            className="btn btn-primary"
                            disabled={uploading}
                        >
                            {uploading ? 'Uploading & Parsing...' : 'Upload & Analyze'}
                        </button>
                    </div>
                )}
            </div>

            <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Extracted Skills</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {skills.map((skill, i) => (
                        <span key={i} style={{
                            backgroundColor: '#dbeafe', color: '#1e40af',
                            padding: '0.25rem 0.75rem', borderRadius: '9999px',
                            fontSize: '0.875rem'
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
