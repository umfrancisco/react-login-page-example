import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleLogin = async () => {
        try {
            if (!username || !password) {
                setError('Please enter both username and password.');
                return;
            }

            const response = await axios.post('http://localhost:8080/auth/login', { username, password });
            console.log('Login successful:', response.data);
            history('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Invalid username or password.');
        }
    };

    return (
        <div>
            <div>
                <div>
                    <h2>Login Page</h2>
                    <input placeholder='Username' id='username' value={username} type='text' onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <p>{error}</p>} {/* Render error message if exists */}
                    <button onClick={handleLogin}>Sign in</button>
                    <div>
                        <p>Not a member? <a href="/signup" >Register</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;