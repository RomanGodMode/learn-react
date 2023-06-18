import { AuthProvider, useAuth } from '../4-react-context/auth-context'
import { FC, ReactNode } from 'react'


type Props = {
  children: ReactNode
}

// HOC - high order component - компонент высшего порядка
// тоесть компонент который принимает компонент и возвращает новый немного измененный

export const AuthorizedPage = <T extends {},>(Component: FC<T>) => (props: T) => {
  const {isAuth, login} = useAuth()

  return isAuth
    ? <Component {...props}/>
    : <div>
      <button onClick={login}>login</button>
    </div>
}

type PageProps = {
  num: number
}

export const Page = AuthorizedPage(({num}: PageProps) => {
  const {logout} = useAuth();

  return (
    <div>
      Страница {num} на которую можно зайти только авторизованному
      <button onClick={logout}>logout</button>
    </div>
  )
})

export const Example4_5_1 = () => {
  return (
    <AuthProvider>
      <Page num={1}/>
    </AuthProvider>
  )
}
