import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('noteNestUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would be an API call
    const users = JSON.parse(localStorage.getItem('noteNestUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      const userData = { id: user.id, name: user.name, email: user.email };
      setUser(userData);
      localStorage.setItem('noteNestUser', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (name, email, password) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user creation
    const users = JSON.parse(localStorage.getItem('noteNestUsers') || '[]');
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password
    };
    
    users.push(newUser);
    localStorage.setItem('noteNestUsers', JSON.stringify(users));
    
    const userData = { id: newUser.id, name: newUser.name, email: newUser.email };
    setUser(userData);
    localStorage.setItem('noteNestUser', JSON.stringify(userData));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('noteNestUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};