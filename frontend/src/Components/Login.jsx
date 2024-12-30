import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear any previous error
        setError('');

        try {
            // Send the login request to the backend
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            // Check if login was successful
            if (response.ok) {
                const data = await response.json();
                // Store the token in localStorage (or sessionStorage)
                localStorage.setItem('token', data.token);
                // Redirect to a different page
                navigate('/dashboard');
            } else {
                const data = await response.json();
                setError(data.error || 'Something went wrong');
            }
        } catch (error) {
            setError('Failed to connect to the server');
            console.error(error);
        }
    };


    return (
        <div className='loginContainer'>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form className='loginForm' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="signup">
                <p>Don&apos;t have an account?</p>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;