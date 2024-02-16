import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Link, Box, Avatar } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Container  maxWidth="xs" sx={{ width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Box display="flex" justifyContent="center" mb={2}>
        <Avatar sx={{ fontSize: 100, color: 'primary.dark',width: 80,height: 80 }} />
        
      </Box>
      <Box>
        <Typography variant='h6' sx={{display:'flex',justifyContent:'center'}}>Sign In</Typography>
      </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: 'primary.light', color: '#fff', '&:hover': { backgroundColor: 'primary.dark' } }}
          >
            Sign In
          </Button>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <Link href="#" color="primary">
              Forgot password?
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
