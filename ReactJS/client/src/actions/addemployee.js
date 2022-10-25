import * as api from '../api/index.js';
import { ADDEMPLOYEE } from '../constants/actionTypes';

export const addemployee = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.addEmployee(formData);
  
      dispatch({ type: ADDEMPLOYEE, data });
  
      router.push('/employeeform');
    
    } catch (error) {
      console.log(error);
    }
  };

