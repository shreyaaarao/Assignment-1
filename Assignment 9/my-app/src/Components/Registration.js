import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import './Registration.css';

const Registration = () => {
    const navigate = useNavigate();
  // State variables to store form inputs and error message
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password verification
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear error message if validation passes
    setError('');

    // Your registration logic goes here
    // For demonstration purposes, let's just log the form data
    console.log({
      username,
      firstName,
      lastName,
      dob,
      gender,
      password,
    });

    // Reset form fields after submission
    setUsername('');
    setFirstName('');
    setLastName('');
    setDob('');
    setGender('');
    setPassword('');
    setConfirmPassword('');
    navigate('/login');
  };

  return (
    <div className='container'>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <TextField
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='name-inputs'>
          <div className='form-input'>
            <TextField
              id="firstName"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className='form-input'>
            <TextField
              id="lastName"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='form-input'>
          <TextField
            id="dob"
            label="Date of Birth"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className='form-input'>
          <label>Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
            required
          /> Male
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
            required
          /> Female
        </div>
        <div className='form-input'>
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-input'>
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className='error'>{error}</div>}
        <div className='button'>
          <Button className='submit-btn' type="submit" variant="contained" color="primary">Register</Button>
        </div>
      </form>
      <Link className='link' to="/login">Already have an account? Login here.</Link>
    </div>
  );
};

export default Registration;
