import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      api.setToken(token);
      api.getCurrentUser().then(res => setUser(res.data)).catch(() => setToken(null));
    }
  }, [token]);

  const login = async (email, password) => {
    const res = await api.login(email, password);
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
  };

  const register = async (email, username, password) => {
    const res = await api.register(email, username, password);
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated: !!token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
