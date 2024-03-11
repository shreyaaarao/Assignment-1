import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { TextField, Button } from '@material-ui/core';
 
const Login = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const handleLogin = () => {
    // Check credentials from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
      navigate('/dashboard'); // Use navigate function to redirect
    } else {
      setError('Invalid email or password');
    }
  };
 
  return (
    <div>
      <h2>Login</h2>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      {error && <p>{error}</p>}
    </div>
  );
};
 
export default Login;
 