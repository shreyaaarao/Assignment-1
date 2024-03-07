import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import { UserProvider } from './UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
