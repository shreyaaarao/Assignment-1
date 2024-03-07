import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Password validation (at least 1 uppercase, 1 lowercase, 1 number, and 1 special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
      return;
    }
  
    // If validation passes, set user context and navigate to dashboard
    setUser({ username });
    navigate('/dashboard');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <h1>Login</h1>
          <label>Username (Email):</label>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
