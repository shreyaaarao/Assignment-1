// Routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* Add more routes as needed */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
