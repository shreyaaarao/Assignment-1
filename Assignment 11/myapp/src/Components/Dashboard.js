import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='container'>
      <h1>Dashboard</h1>
      <h4>Hello, {user.username}</h4>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default Dashboard;
