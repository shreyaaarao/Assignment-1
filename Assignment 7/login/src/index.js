import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'  
import './index.css';  
import App from './App';
import LoginPage from './login';


const routing = (  
  <Router>  
    
    <div>  

      <Routes>
      <Route path='/home' Component={App} />
      <Route path='/' Component={LoginPage} />
    
      </Routes>
    </div>  
  </Router>  
);
ReactDOM.render(routing, document.getElementById('root'));  