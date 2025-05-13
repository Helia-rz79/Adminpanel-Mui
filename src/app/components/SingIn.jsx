'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Box, Button, Checkbox, Snackbar, TextField, Typography, Alert, Paper
} from '@mui/material'

export default function SignInPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [adminChecked, setAdminChecked] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false) 

  useEffect(() => {
    setMounted(true)  // setting mounted to true once component is rendered
  }, [])

  useEffect(() => {
    if (adminChecked) {
      setEmail('HeliaRezaie@gmail.com')
      setPassword('1234')
    } else {
      setEmail('')
      setPassword('')
    }
  }, [adminChecked])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'HeliaRezaie@gmail.com' && password === '1234') {
      setSuccess(true)
      setTimeout(() => router.push('/Dashboard'), 1000)
    } else {
      setError(true)
    }
  }

  // Only render the component on the client
  if (!mounted) {
    return null
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#d4d2d2',
        p: 2,
      }}
    >
      <Paper elevation={6} sx={{ p: 5, borderRadius: 4, width: '100%', maxWidth: 420 }}>
        <Typography variant="h4" textAlign="center" mb={3} color="black">
          Welcome Back
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box display="flex" alignItems="center" my={1}>
            <Checkbox
              checked={adminChecked}
              onChange={() => setAdminChecked(prev => !prev)}
              color="gray"
            />
            <Typography variant="body2">Are you Admin? Click here</Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="white"
            fullWidth
            sx={{
              mt: 2,
              borderRadius: 2,
              py: 1,
              textTransform: 'none',
              fontWeight: 'bold',
              backgroundColor: 'black',
              color:'white',
              ':hover': {
                backgroundColor: '#3b3b3b',
                
              },
            }}
          >
            LogIn
          </Button>
        </form>

        <Box mt={3} textAlign="center" border="1px dashed #bbb" borderRadius={2} p={2}>
          <Typography variant="body2" color="textSecondary">
            Test Email: <strong>HeliaRezaie@gmail.com</strong><br />
            Password: <strong>1234</strong>
          </Typography>
        </Box>

        <Snackbar
          open={success}
          autoHideDuration={2000}
          onClose={() => setSuccess(false)}
        >
          <Alert severity="success" variant="filled">Login successful!</Alert>
        </Snackbar>

        <Snackbar
          open={error}
          autoHideDuration={2000}
          onClose={() => setError(false)}
        >
          <Alert severity="error" variant="filled">Invalid email or password.</Alert>
        </Snackbar>
      </Paper>
    </Box>
  )
}