import axios from 'axios';
// 액션 생성 함수 만들기
export const LOGIN_TRUE = 'LOGIN_TRUE';
export const LOGIN_FALSE = 'LOGIN_FALSE';
// 우리가 로그인 했는지에 대한 정보와 닉네임? 같은 거를 가지고 있도록 할께요 리덕스에요

// 액션 생성 함수는 액션 객체를 만들어주는 함수
export const loginTrue = () => {
  // 이 함수는 로그인 상태를 true로 변화하는 액션 함수에요
  return {
    type: LOGIN_TRUE,
  };
};

export const loginFalse = () => {
  // 이 함수는 로그인 상태를 false로 변화하는 액션 함수에요
  return {
    type: LOGIN_FALSE
  };
};
