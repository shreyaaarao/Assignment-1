import React, { Component } from 'react';
import './register.css';

class ClassRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      company: '',
      welcomeMessage: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, company } = this.state;
    const message = `Welcome, ${name}! You are ${age} years old, working at ${company}.`;
    this.setState({ welcomeMessage: message, name: '', age: '', company: '' });
  };

  render() {
    const { name, age, company, welcomeMessage } = this.state;
    return (
      <div className='Register'>
        <form onSubmit={this.handleSubmit}>
          <h1>Registration</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleChange} required />
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={age} onChange={this.handleChange} required />
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" value={company} onChange={this.handleChange} required />
          <button type="submit">Submit</button>
        </form>
        {welcomeMessage && <p className="welcome-message">{welcomeMessage}</p>}
      </div>
    );
  }
}

export default ClassRegister;
