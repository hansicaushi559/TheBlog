import React, { useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, Grid, TextField, FormControlLabel, Checkbox, Button, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import axiosInstance from '../axios';  
import { useNavigate } from 'react-router-dom'

const StyledPaper = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }));
  
  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  }));
  
  const StyledForm = styled('form')(({ theme }) => ({
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }));
  
  const StyledSubmitButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
  }));

function Login() { 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const navigate = useNavigate()
  
  const sendFormData = async (formData) => {
    try {
      const response = await axiosInstance.post('token/',
        {
          email: formData.email,
          password: formData.password,
        }
      );
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await sendFormData(formData);
      console.log('Data sent successfully:', response);
      navigate('/');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <StyledPaper>
      <StyledAvatar>
        <LockOutlinedIcon />
      </StyledAvatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleInputChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <StyledSubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </StyledSubmitButton>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledPaper>
  </Container>
  );
}

export default Login;
