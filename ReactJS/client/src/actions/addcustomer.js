import * as api from '../api/index.js';
import { ADDCUSTOMER } from '../constants/actionTypes';


export const addcustomer = (formData, router) => async (dispatch) => {

    console.log('formdata',formData)
    try {
      const { data } = await api.addCustomer(formData);
  
      dispatch({ type: ADDCUSTOMER, data });

      await setTimeout(router.push('/customerform'), 1000)

      // await setTimeout(window.location.reload(), 1000)
      
    } catch (error) {
      console.log(error);
    }
  };
