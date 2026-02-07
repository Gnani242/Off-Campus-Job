import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    // Verify token and get user data
                    // For now, we simulate a user if token exists or ideally call an endpoint
                    // const res = await api.get('/auth/me'); setUser(res.data);
                    setUser({ name: 'User', email: 'user@example.com' }); // Placeholder
                } catch (error) {
                    console.error("Auth check failed", error);
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        loadUser();
    }, []);

    const login = async (email, password) => {
        // const res = await api.post('/auth/login', { email, password });
        // localStorage.setItem('token', res.data.token);
        // setUser(res.data.user);

        // Simulation
        localStorage.setItem('token', 'dummy-token');
        setUser({ name: 'John Doe', email });
        return true;
    };

    const register = async (userData) => {
        // const res = await api.post('/auth/register', userData);
        // localStorage.setItem('token', res.data.token);
        // setUser(res.data.user);

        // Simulation
        localStorage.setItem('token', 'dummy-token');
        setUser({ name: userData.name, email: userData.email });
        return true;
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
