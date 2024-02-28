import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'  
import './index.css';  
import App from './App';
import Register from './Register';

const routing = (  
  <Router>  
    
    <div>  

      <Routes>
      <Route path='/' Component={App} />
      <Route path='/register' Component={Register} />
    
      </Routes>
    </div>  
  </Router>  
);
ReactDOM.render(routing, document.getElementById('root'));  