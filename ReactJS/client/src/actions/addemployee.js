import { ADDEMPLOYEE, START_LOADING, GETEMPDATA} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const addemployee = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.addEmployee(formData);

      dispatch({ type: ADDEMPLOYEE, data });
      
      // console.log("this is",data)
      router.push('/auth');
    
    } catch (error) {
      console.log(error);
    }
  };

  export const getempdata = (id) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
  
      const { data } = await api.fetchEmpdata(id);
  
      dispatch({ type: GETEMPDATA, payload: { data } });
    
    } catch (error) {

      console.log(error);

    }
  };