// import { connectAdvanced } from 'react-redux';
import { LOGIN_TRUE, LOGIN_FALSE, LOGOUT } from '../actions/index';

const initialState = {
  islogin: false,
};

const LoginTest = (state = initialState, action) => {
  switch (action.type) {
    // login true
    case LOGIN_TRUE:
      return Object.assign({}, state, {
        islogin: true,
      });
    // login false
    case LOGIN_FALSE:
      return Object.assign({}, state, {
        islogin: false,
      });
    // logout
    case LOGOUT:
      return Object.assign({}, state, {
        islogin: false,
      });
    default:
      return state;
  }
};

export default LoginTest; // combineReducers에서 쓸 수 있도록
