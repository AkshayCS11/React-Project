import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { signin} from '../../actions/auth';
import useStyles from './styles';
import Input from './Input';
// import { GoogleLogin } from 'react-google-login';
// import Icon from './icon';
// import { AUTH } from '../../constants/actionTypes';

const initialState = { email: '', password: '' };

const SignIn = () => {
  const [form, setForm] = useState(initialState);
  // const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    // setIsSignup((prevIsSignup) => !prevIsSignup);
    history.push('/signup')

    setShowPassword(false);
  };
  const forgotPassword = () => {
    history.push('/forgotpassword')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(form, history));
  };

  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: AUTH, data: { result, token } });

  //     history.push('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign In </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />

          </Grid>

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> Sign In </Button>
             
          <Grid container justify="flex-end">

            <Grid item>

              <Button onClick={switchMode}>
                Don't have an account? Sign Up 
              </Button>
              
              <Button onClick={forgotPassword}>
                Forgot Password
              </Button>

            </Grid>

          </Grid>
          {/* <GoogleLogin
            clientId="564033717568-bu2nr1l9h31bhk9bff4pqbenvvoju3oq.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          /> */}
        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;