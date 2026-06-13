import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook


function SignupPage() {
	const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('ROLE_CUSTOMER');
    const [error, setError] = useState(''); // State to manage error messages
    const history = useNavigate(); // Get the history object for redirection

    const handleSignup = async () => {
        try {
            // Check for empty fields
            if (!username || !email || !password || !confirmPassword) {
                setError('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }

            const response = await axios.post('http://localhost:8080/auth/signup', {
                email,
				username,
                password,
                role
            });
            // Handle successful signup
            console.log(response.data);
            history('/dashboard');
        } catch (error) {
            // Handle signup error
            console.error('Signup failed:', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <div>
                <div>
                    <h2>Sign Up Page</h2>
                    {/* Render error message if exists */}
                    {error && <p>{error}</p>}
					<input placeholder='Username' id='username' value={username} type='text'
					                              onChange={(e) => setUsername(e.target.value)}/>
                    <input placeholder='Email Address' id='email' value={email} type='text'
                              onChange={(e) => setEmail(e.target.value)}/>
                    <input placeholder='Password' id='password' type='password' value={password}
                              onChange={(e) => setPassword(e.target.value)}/>
                    <input placeholder='Confirm Password' id='confirmPassword' type='password'
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}/>

                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="ROLE_CUSTOMER">User</option>
                        <option value="ROLE_ADMIN">Admin</option>
                    </select>
                    <button onClick={handleSignup}>Sign Up</button>

                    <div>
                        <p>Already Register? <a href="/">Login</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignupPage;