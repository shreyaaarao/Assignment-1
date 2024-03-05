import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button, TextField } from '@mui/material';
import './Login.css';

const Login = () => {
  // State to store username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Get navigate function using useNavigate
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = () => {
    // Validate username and password (You can add your validation logic here)
    // For demonstration purposes, let's assume the login is successful if both fields are filled
    if (username && password) {
      // Navigate to dashboard
      navigate('/dashboard');
    } else {
      // Display error message if fields are empty
      setError('Please enter username and password.');
    }
  };

  return (
    <div className='container'>
      <h1>LOGIN</h1>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className='error'>{error}</div>} <br></br> <br></br>
      <div className='button'>
        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
      </div>
      <br />
      <Link to="/register">Don't have an account? Register here.</Link>
    </div>
  );
};

export default Login;
