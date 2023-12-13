import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  CssBaseline,
  Avatar,
  Stack,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

interface LoginFormProps {
  onLogin: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: Record<string, string>) => {
    // Simulate registration by storing the user in local storage
    localStorage.setItem('user', JSON.stringify(data))
    console.log('User logged in:', data)
    onLogin()
  }

  return (
    <>
      <Container component="div" maxWidth="xs">
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: 1 }}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  error={Boolean(errors.email)}
                  helperText={errors.email && typeof errors.email === 'string' ? errors.email : ''}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Password is required', minLength: 6 }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password && typeof errors.password === 'string' ? errors.password : ''
                  }
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
              onClick={() => onSubmit}
            >
              Login
            </Button>
          </form>
          <Stack direction="row" justifyContent="center">
            <Typography variant="body2">Don't have an account? Sign Up</Typography>
          </Stack>
        </Paper>
      </Container>
    </>
  )
}
