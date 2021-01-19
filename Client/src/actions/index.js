// import { request } from '../utils/axios';
// 우리가 로그인 했는지에 대한 정보와 닉네임? 같은 거를 가지고 있도록 할께요 리덕스에요
// 액션 생성 함수 만들기
export const LOGIN_TRUE = 'LOGIN_TRUE';
export const LOGIN_FALSE = 'LOGIN_FALSE';
export const LOGOUT = 'LOGOUT';

// const USER_URL = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/user`;

// 액션 생성 함수는 액션 객체를 만들어주는 함수
export const loginTrue = () => {
  return {
    type: LOGIN_TRUE,
  };
};
export const loginFalse = () => {
  return {
    type: LOGIN_FALSE,
  };
};
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
