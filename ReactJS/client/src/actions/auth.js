import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    
    dispatch({ type: AUTH, data });
    
    
    router.push('/');
    alert("Successfully signed in")
  } catch (error) {
    alert("Sign in failed: Invalid credentials" )

    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData); // formData sends to the server

    // dispatch({ type: AUTH, data }); // data pass to the reducers

    router.push('/activate');
    alert("Verification of your account is required. A verification code is send to the email address")

  } catch (error) {
    alert("Wrong credentials")

    console.log(error);
  }
};

export const activate = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.activate(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
    alert("Successfully verified and signing in")

  } catch (error) {
    alert("Code verification failed")

    console.log(error);
  }
};

export const forgotpassword = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.forgotPassword(formData);

    alert("Please check your email. Successfully send a new verification code to user email address")
    router.push('/resetpassword');
    dispatch({ type: AUTH, data });


  } catch (error) {
    // alert("Invalid email address")

    console.log(error);
  }
};
export const resetpassword = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.resetPassword(formData);

    alert("Successfully reset your password. Now you can sign in")
    dispatch({ type: AUTH, data });
    
  } catch (error) {
    // alert("Wrong credentials")
    router.push('/auth');

    console.log(error);
  }
};