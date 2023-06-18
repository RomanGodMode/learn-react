import React, { createContext, ReactNode, useContext, useState } from 'react'

type AuthContextType = {
  isAuth: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: {children: ReactNode}) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => setIsAuth(true);

  const logout = () => setIsAuth(false);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('need to wrap by AuthProvider')
  }

  return context
}
