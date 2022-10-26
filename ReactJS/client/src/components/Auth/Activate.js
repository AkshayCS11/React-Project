import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { activate } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';

const initialState = { email: '', emailToken:"" };

const Activate = () => {

const [form, setForm] = useState(initialState);
const [isSignup, setIsSignup] = useState(false);
const dispatch = useDispatch();
const history = useHistory();
const classes = useStyles(); 

const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    // setShowPassword(false);
};

const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(activate(form, history));    //check on \actions\auth.js
};

// const googleSuccess = async (res) => {
//     const result = res?.profileObj;
//     const token = res?.tokenId;

//     try {

//       dispatch({ type: AUTH, data: { result, token } });

//       history.push('/');
//       // window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return(

        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={6}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Activate Your Account</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {  (
                        <>
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="emailToken" label="Email verification Code" handleChange={handleChange} type='text' />
                        </>
                        )}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Activate
                    </Button>
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
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
};

export default Activate;