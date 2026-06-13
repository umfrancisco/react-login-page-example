// WelcomeDashboard.js
import React from 'react';
import { useNavigate} from 'react-router-dom'; // Import useHistory hook

function WelcomeDashboard() {
    const history = useNavigate();

    const handleLogout = () => {
        // Perform logout actions here (e.g., clear session, remove authentication token)
        // After logout, redirect to the login page
        history('/');
    };

    return (
        <div>
            <div>
                <h2>Welcome to Dashboard</h2>
                <p>You are logged in successfully.</p>
                <div>
                    <button type="button" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default WelcomeDashboard;