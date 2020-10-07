import { LOGIN_TRUE, LOGIN_FALSE, LOGOUT } from '../actions/index';

// 초기 상태 및 리듀서 함수 만들기에요
const initialState = {
  // 초기 상태값 정의하는 부분
  isLogin: false, // 기본 값은 로그인이 되어 있지 않은 상태로
};

const LoginTest = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_TRUE:
      return {
        login: true,
      };
    case LOGIN_FALSE:
      return {
        login: false,
      };
    case LOGOUT:
      return {
        login: false,
      };
    default:
      return state;
  }
};

export default LoginTest; // combineReducers에서 쓸 수 있도록
