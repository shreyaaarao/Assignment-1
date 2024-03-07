import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'Shreya',
    name: 'Shreya',
    country: 'India',
    gender: 'Female',
    permanentAccountNumber: 'ABC123XYZ',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
