import * as api from '../api/index.js';
import { ADDCUSTOMER } from '../constants/actionTypes';

export const addcustomer = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.addCustomer(formData);
  
      dispatch({ type: ADDCUSTOMER, data });
  
      router.push('/customerform');
    
    } catch (error) {
      console.log(error);
    }
  };