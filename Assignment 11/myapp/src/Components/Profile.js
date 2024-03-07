import React, { useEffect, useReducer } from 'react';
import profile from '../profile.json';
import './Profile.css';

const initialState = {
  profileData: null,
  loading: true,
  error: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        profileData: action.payload,
        loading: false,
        error: ''
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const Profile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
       
        const data = profile;
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchProfileData();
  }, []);

  const { profileData, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      <h1>Profile</h1>
      {profileData && (
        <>
          <h4>Name: {profileData.name}</h4>
          <h4>Country: {profileData.country}</h4>
          <h4>Gender: {profileData.gender}</h4>
          <h4>Permanent Account Number: {profileData.pan}</h4>
        </>
      )}
    </div>
  );
};

export default Profile;
