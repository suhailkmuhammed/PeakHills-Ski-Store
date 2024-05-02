import { Container, Paper, Typography, TextField, Box, Avatar, useTheme } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/store/configureStore';
import { signInUser } from './accountSlice';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { register, handleSubmit, formState: { isSubmitting, errors, isValid } } = useForm({
    mode: 'onTouched'
  })
  async function submitForm(data: FieldValues) {
    try {
      var user = await dispatch(signInUser(data));
      if (user.meta.requestStatus === "fulfilled")
        navigate(location.state?.from || '/catalog');
      else
        navigate('/')
    } catch(error){
      console.log(error);
    }
  }
  const theme = useTheme();

  return (
    <Container maxWidth="xs" sx={{ width: '100%', display: '', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column' }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5', borderRadius: 2 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar sx={{ fontSize: 100, color: theme.palette.mode === 'dark' ? '#f5f5f5' : 'primary.dark', width: 80, height: 80 }} />
        </Box>
        <Box>
          <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center' }}>Sign In</Typography>
        </Box>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Username"
            {...register('username', { required: 'Username is required' })}
            error={!!errors.username}
            helperText={errors?.username?.message as string}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors?.password?.message as string}
          />
          <LoadingButton
            loading={isSubmitting}
            disabled={!isValid}
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: theme.palette.mode === 'dark' ? '#90caf9' : 'primary.light',
              color: theme.palette.mode === 'dark' ? '#000' : '#fff',
              '&:hover': { backgroundColor: 'primary.dark' }
            }}
          >
            Sign In
          </LoadingButton>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <Link to='/Register' style={{ color: theme.palette.mode === "dark" ? "#ed0c0c" : "blue" }}>
              Don't have an account? Sign Up
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};
export default LoginPage;
