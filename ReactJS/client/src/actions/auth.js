import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/activate');
  } catch (error) {
    console.log(error);
  }
};

export const activate = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.activate(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
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