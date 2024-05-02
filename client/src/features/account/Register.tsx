import { Container, Paper, Typography, TextField, Box, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Link, useNavigate } from 'react-router-dom';
import agent from '../../app/api/agent';
import { AppRegistrationOutlined } from '@mui/icons-material';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
  const { register, handleSubmit,setError, formState: { isSubmitting, errors, isValid } } = useForm({
    mode: 'all'
  })
  
  function handleApiErrors(errors: any) {
    if(errors) {
        errors.forEach((error: string) => {
            if(error.includes('Password')){
                setError('password',{message: error})
            } else if(error.includes('Email')){
                setError('email',{message: error})
            } else if(error.includes('Username')){
                setError('username',{message: error})
            }
        });
    }
    
  }

  const theme = useTheme();

  return (
    <Container maxWidth="xs" sx={{ width: '100vw', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column' }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5', borderRadius: 2 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <AppRegistrationOutlined sx={{ fontSize: 100, color: theme.palette.mode === 'dark' ? '#f5f5f5' : 'primary.dark', width: 80, height: 80 }} />
        </Box>
        <Box>
          <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center' }}>Register</Typography>
        </Box>
        <form onSubmit={handleSubmit(data => agent.Account.register(data)
            .then(() => {
                toast.success('Registration successfull - you can now login')
                navigate('/login');
            })
            .catch(errors => handleApiErrors(errors)))}
            noValidate
            >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            label="Username"
            {...register('username', { required: 'Username is required' })}
            error={!!errors.username}
            helperText={errors?.username?.message as string}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            {...register('email', { 
                required: 'Email is required',
                pattern: {
                    value: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                    message: 'Not a valid email address'
                }
             })}
            error={!!errors.email}
            helperText={errors?.email?.message as string}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            {...register('password', { 
                required: 'Password is required',
                pattern: {
                    value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                    message: 'password does not meet complexity requirements'
                }
             })}
            error={!!errors.password}
            helperText={errors?.password?.message as string}
          />
          <LoadingButton
            loading={isSubmitting}
            disabled={!isValid}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, 
              backgroundColor: theme.palette.mode === 'dark' ? '#90caf9' : 'primary.light', 
              color:theme.palette.mode === 'dark' ? '#000' : '#fff', 
              '&:hover': { backgroundColor: 'primary.dark' } }}
          >
            Register
          </LoadingButton>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <Link to='/login' style={{ color:theme.palette.mode === "dark"? "#ed0c0c" : "blue" }}>
              Already have an account? Sign In
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};
export default Register;
