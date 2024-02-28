import React, { useState } from "react";
import './register.css';

function Register() {

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setRegistrationSuccess(true);

    alert('Registration successful! Redirecting...');

  };

  return (
    <div className="form-container">

      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <div className="name-inputs">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required />
        <div className="gender-inputs">
          <div>
            <label>Gender:</label>
          </div>
          <div>
            Male<input type="radio" id="male" name="gender" value="male" required />

          </div>
          <div>
            Female<input type="radio" id="female" name="gender" value="female" required />

          </div>
        </div>
        <label>Language:</label>
        <input type="checkbox" name="language" value="English" checked />English
        <input type="checkbox" name="language" value="NonEnglish" />Non English <br></br> <br></br>
        <label htmlFor="image">Image:</label>
        <input type="file" name="image" /> <br></br> <br></br>
        <label htmlFor="link">Link:</label>
        <a href="https://github.com/shreyaaarao" id="link">Visit this link</a> <br></br> <br></br>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />
        <button type="submit">Register</button>
      </form>


    </div>
  );
}

export default Register;
