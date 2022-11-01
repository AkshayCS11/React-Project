import { EDITPROFILE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const editprofile = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.editProfile(formData);

      dispatch({ type: EDITPROFILE, data });
      
      router.push('/editprofile');
    
    } catch (error) {
      console.log(error);
    }
  };