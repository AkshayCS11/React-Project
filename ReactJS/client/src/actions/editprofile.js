import { EDITPROFILE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const editprofile = (formData,id,router) => async (dispatch) => {
    try {
      const { data } = await api.editProfile(formData,id);

      dispatch({ type: EDITPROFILE, data });
      
      router.push('/editprofile');
    
    } catch (error) {
      console.log(error);
    }
  };