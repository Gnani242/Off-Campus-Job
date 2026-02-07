import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Briefcase, User, LogOut } from 'lucide-react';

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav style={{ backgroundColor: 'var(--surface)', padding: '1rem', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--primary)' }}>
                    AutoApply
                </Link>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    {user ? (
                        <>
                            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Briefcase size={18} /> Jobs
                            </Link>
                            <Link to="/profile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={18} /> Profile
                            </Link>
                            <button
                                onClick={logout}
                                className="btn"
                                style={{ color: 'var(--error)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <LogOut size={18} /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn">Login</Link>
                            <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
