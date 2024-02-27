import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route,Link,BrowserRouter as Router, Routes } from 'react-router-dom'  
import './index.css';  
import App from './App';
import Register from './Register';
import Login from './Login'; 
import Profile from './Profile';

const routing = (  
  <Router> 
    <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/register">Register</Link>  
        </li>  
        <li>  
          <Link to="/login">Login</Link>  
        </li> 
        <li>  
          <Link to="/profile">Profile</Link>  
        </li>  
      </ul>   
    
    <div>  

      <Routes>
      <Route path='/' Component={App} />
      <Route path='/register' Component={Register} />
      <Route path='/login' Component={Login} />
      <Route path="/profile" Component={Profile} />
      </Routes>
    </div>  
    
  </Router>  
  
);
ReactDOM.render(routing, document.getElementById('root'));  