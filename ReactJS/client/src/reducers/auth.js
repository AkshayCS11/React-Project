import * as actionType from '../constants/actionTypes';


const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:

     localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

     
      const user = (JSON.parse(localStorage.getItem('profile')));
      console.log(user)
      console.log(user.result.name)
      console.log(user.result.isAdmin)
      console.log(action.data)


      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
