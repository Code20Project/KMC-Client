import React from 'react';
import { connect } from 'react-redux';
import { loginTrue, loginFalse } from '../actions';
import LoginTest from '../components/loginTest';

// 컨테이너를 쓰는 이유, 하나의 리듀서를 여러개의 컴포넌트에 적용하기 위해서

// const LoginTestContainer = ({login, loginTrue, loginFalse}) => {
//   return <LoginTest login={login} loginTrue={loginTrue} loginFalse={loginFalse}/>
// };

const mapStateToProps = (state) => ({
  login: state.LoginTest.login,
});

const mapDispatchToProps = (dispatch) => ({
  loginTrue: () => dispatch(loginTrue()),
  loginFalse: () => dispatch(loginFalse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginTest);
