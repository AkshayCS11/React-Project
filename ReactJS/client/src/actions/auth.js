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
    alert("Already a User. Please use different email address")

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

    dispatch({ type: AUTH, data });

    router.push('/resetpassword');
  } catch (error) {
    console.log(error);
  }
};
export const resetpassword = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.resetPassword(formData);

    dispatch({ type: AUTH, data });

    router.push('/auth');
  } catch (error) {
    console.log(error);
  }
};
