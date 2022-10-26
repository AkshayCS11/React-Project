import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { resetpassword } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';


const initialState = { email: '', emailToken:"" };

const ResetPassword= () => {

const [form, setForm] = useState(initialState);
const [isSignup, setIsSignup] = useState(false);
const dispatch = useDispatch();
const history = useHistory();
const classes = useStyles(); 
// const forgotPassword = () => {
//     history.push('/forgotpassword')
//   };
const [showPassword, setShowPassword] = useState(false);
const handleShowPassword = () => setShowPassword(!showPassword);

// const switchMode = () => {
//     setForm(initialState);
//     setIsSignup((prevIsSignup) => !prevIsSignup);
//     // setShowPassword(false);
//     if(isSignup){
//         history.push('/auth');
//     }
//     else history.push('/auth');
// };

const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(resetpassword(form, history));    //check on \actions\auth.js
};



  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return(

        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={6}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Enter the verification code </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {  (
                        <>
                        <Input name="code" label="Verification code" handleChange={handleChange} type="text" />
                        <Input name="newPassword" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange}  type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} /> 
                        </>
                        )}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Submit 
                    </Button>
                   
                </form>
            </Paper>
        </Container>
    )
};

export default ResetPassword;