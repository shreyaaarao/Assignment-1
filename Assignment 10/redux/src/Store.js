// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  user: {
    name: 'Shreya',
    country: 'India',
    gender: 'Female',
    pan: '1X23',
    education: {
      tenth: { instituteName: 'BGS', cgpa: '9' },
      higherSecondary: { instituteName: 'Vikas', cgpa: '9' },
      graduation: { instituteName: 'NMIT', cgpa: '7.5' },
    },
    certifications: [],
  },
};

// Action types
const SET_USER_DETAILS = 'SET_USER_DETAILS';
const ADD_CERTIFICATION = 'ADD_CERTIFICATION';

// Action creators
export const setUserDetails = (userDetails) => ({
  type: SET_USER_DETAILS,
  payload: userDetails,
});

export const addCertification = (certification) => ({
  type: ADD_CERTIFICATION,
  payload: certification,
});

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case ADD_CERTIFICATION:
      return {
        ...state,
        user: {
          ...state.user,
          certifications: [...state.user.certifications, action.payload],
        },
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

export default store;
