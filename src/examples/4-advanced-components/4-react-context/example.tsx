import React from 'react'
import { AuthProvider, useAuth } from './auth-context'

export const LoginForm = () => {
  const {isAuth, login, logout} = useAuth()
  return <div>
    <div>
      {isAuth ? 'Авторизован' : 'НЕ авторизован'}
    </div>
    {isAuth
      ? <button onClick={logout}>logout</button>
      : <button onClick={login}>login</button>
    }
  </div>
}

export const ReactExample4_4_1 = () => {
  // использовать auth контекст может только компонент ВНУТРИ AuthProvider
  return (
      <AuthProvider>
        <LoginForm/>
      </AuthProvider>
  )
}
