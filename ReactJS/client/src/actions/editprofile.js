import { EDITPROFILE } from '../constants/actionTypes';
import * as api from '../api/index.js';
import * as actionType from '../constants/actionTypes';

export const editprofile = (formData,id,router) => async (dispatch) => {
    try {

      const  data  = await api.editProfile(formData,id);
      console.log("hey",data)

      dispatch({ type: EDITPROFILE, data });
      
      router.push('/profile');
  
    } catch (error) {
      console.log(error);
    }
  };