import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setAuthData] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : null;
  });

  const updateUser = (userData) => {
    setAuthData(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const clearUser = () => {
    setAuthData(null);
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ userData, updateUser, clearUser }}>
      {children}
    </AuthContext.Provider>
  );
};
