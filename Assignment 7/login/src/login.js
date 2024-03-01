import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Password validation (at least 1 uppercase, 1 lowercase, 1 number, and 1 special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
      return;
    }
  
    // If validation passes, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  // Check if user is already logged in, if so, redirect to welcome page
  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome</h2>
        <p>You are  logged in!</p>
      </div>
    );
  }

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
