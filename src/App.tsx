import { ReactNode, useState, useMemo } from 'react'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom'

import useAuth from 'hooks/useAuth'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

import LoginPage from 'pages/Login/Login'
import DrinksPage from 'pages/Drinks/Drinks'
import User from 'pages/User/User'
import DrinkPage from 'pages/Drink/Drink'

import AuthContext from 'context/auth/auth'
import withRoot from './withRoot'

import { fakeAuthProvider } from './auth'

function PublicPage() {
  return <h3>Public</h3>
}

function ProtectedPage() {
  return <h3>Protected</h3>
}

function AuthStatus() {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p>You are not logged in.</p>
  }

  return (
    <p>
      Welcome {auth.user}!{' '}
      <button
      type="button"
        onClick={() => {
          auth.signout(() => navigate('/'))
        }}
      >
        Sign out
      </button>
    </p>
  )
}

function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/drinks">Drinks Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Pages</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null)

  const signin = (newUser: string, callback: VoidFunction) =>
    fakeAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })

  const signout = (callback: VoidFunction) =>
    fakeAuthProvider.signout(() => {
      setUser(null)
      callback()
    })

  const value = useMemo(() => ({ user, signin, signout }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/drinks/:id" element={<DrinkPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default withRoot(App)
