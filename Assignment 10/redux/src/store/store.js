import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    name: 'Shreya',
    country: 'India',
    gender: 'Female',
    pan: '1234567890',
    education: {
      tenth: { instituteName: ' BGS', cgpa: '8' },
      higherSecondary: { instituteName: 'Vikas', cgpa: '8' },
      graduation: { instituteName: 'Nitte', cgpa: '7' },
    },
    certifications: ["Java"],
  },
};
const persistConfig = {
    key: 'roots',
    storage,
  };
  
const rootReducer = (state = initialState, action) => {
    console.log(action.type);
    switch(action.type) {
      case 'ADD_CERTIFICATION':
        console.log(action.payload.certification)
        const updatedCertifications = [...state.user.certifications, action.payload.certification];
        console.log("Updated Certifications:", updatedCertifications);
        return {
          ...state,
          user: {
            ...state.user,
            certifications: updatedCertifications,
          },
        };

      default:
        console.log("inside switch")
        return state;
    }
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);


export default store;
