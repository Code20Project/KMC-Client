import axios from 'axios';
// 액션 생성 함수 만들기
export const LOGIN_TRUE = 'LOGIN_TRUE';
export const LOGIN_FALSE = 'LOGIN_FALSE';

export const LOGOUT = 'LOGOUT';
// 우리가 로그인 했는지에 대한 정보와 닉네임? 같은 거를 가지고 있도록 할께요 리덕스에요

// 액션 생성 함수는 액션 객체를 만들어주는 함수
export const loginTrue = ({ user, token }) => ({
  // 이 함수는 로그인 상태를 true로 변화하는 액션 함수에요
  type: LOGIN_TRUE,
  payload: {
    user,
    token,
  },
});

export const loginFalse = (err) => ({
  // 이 함수는 로그인 상태를 false로 변화하는 액션 함수에요
  type: LOGIN_FALSE,
  payload: {
    err,
  },
});

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

// 다른 도메인간 쿠키 전송하기
/*
axios.defaults.withCredentials = true;
const url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/user/profile`;

const postLoginAPI = (data) => {
  axios.post(url, data, {withCredentials = true});
};
const postLogoutAPI = (data) => {
  axios.post(url, data, {withCredentials = false})
}
*/
