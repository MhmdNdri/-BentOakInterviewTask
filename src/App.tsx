import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Dashboard, Login } from '@/pages'
import { ROUTING } from '@/configs/routing'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Boolean(localStorage.getItem('user')))

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path={ROUTING.Login.path}
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to={ROUTING.Dashboard.path} />
              )
            }
          />
          <Route
            path={ROUTING.Dashboard.path}
            element={
              isLoggedIn ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Navigate to={ROUTING.Login.path} />
              )
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
