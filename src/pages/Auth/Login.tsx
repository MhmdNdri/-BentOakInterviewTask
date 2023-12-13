import React from 'react'
import { LoginForm } from '@/buildings/components'
import { Container, CssBaseline, Typography, Link, Stack } from '@mui/material'

interface LoginPageProps {
  onLogin: () => void
}
export const Login: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center', mt: 4 }}>
            Welcome to Your App
          </Typography>
          <LoginForm onLogin={onLogin} />
          <Stack direction="row" justifyContent="center" mt={2}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Stack>
        </Container>
      </div>
    </>
  )
}
