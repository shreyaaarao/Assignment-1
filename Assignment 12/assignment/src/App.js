import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
 
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
};
 
export default App;
 