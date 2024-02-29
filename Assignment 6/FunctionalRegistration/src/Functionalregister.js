import React, { useState } from 'react';
import './register.css';

function Functionalregister(props) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    company: '',
  });

  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, company } = formData;
    const message = `Welcome, ${name}! You are ${age} years old, working at ${company}.`;
    setWelcomeMessage(message);
    setFormData({ name: '', age: '', company: '' });
  };

  return (
    <div className='Register'>
      <form onSubmit={handleSubmit}>
        <h1>User Registration</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {welcomeMessage && <p className="welcome-message">{welcomeMessage}</p>}
    </div>
  );
}

export default Functionalregister;
