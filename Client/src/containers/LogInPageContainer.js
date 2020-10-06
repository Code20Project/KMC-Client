import React from 'react';
import { connect } from 'react-redux';
import { loginTrue, loginFalse } from '../actions';
import LogInPage from '../components/LoginPage';

const mapStateToProps = (state) => ({
  // LoginPage에서 로그인 초기 상태값의 속성을 받고 싶어합니다.
  login: state.LogInPage.login,
});

const mapDispatchToProps = (dispatch) => ({
  // 로그인 성공과 실패에 대한 결과를 dispatch 해줍니다.
  loginTrue: () => dispatch(loginTrue()),
  loginFalse: () => dispatch(loginFalse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
