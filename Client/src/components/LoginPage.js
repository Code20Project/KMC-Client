// router, cookie, async && await
import React, { useState } from 'react';
// import cookie from 'react-cookie';
// import { connect } from 'react-redux';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import { loginFalse, loginTrue } from '../actions';

// 라우터로 전달받은 prameter 설정
const LogInPage = ({ history }) => {
  // 값을 세팅하는 함수
  // 서버에 보내줄 정보
  // Button의 상태를 결정할 함수 >> token이 있다면, 유저의 정보를 가져온다.

  // 로그인 입력창,패스워드 입력창, 로그인 버튼, 처음 오셨나요 >> 회원가입 페이지로 이동
  // 로그인 시, 로그아웃 버튼
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailCondition = (e) => {
    // console.log(email);
    setEmail(e.target.value);
  };

  const passwordCondition = (e) => {
    // console.log(password);
    setPassword(e.target.value);
  };

  const checkMassage = () => {
    if (email.length === 0) {
      return alert('이메일을 입력하세요');
    }
    if (password.length === 0) {
      return alert('비밀번호를 입력하세요');
    }
  };

  const newUser = () => {
    history.push('/SignUp');
  };

  const url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/user/profile`;
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    axios({
      method: 'get',
      url: url,
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      // console.log('응답', res);
      // 서버에 보낸 결과가 201인 경우 token을 받아온다
      if (res.status === 201) {
        alert('로그인에 성공했습니다.');
        return loginTrue;
      }
      // 서버에 보낸 결과가 409일 경우 가입되지 않은 회원입니다
      if (res.status === 409) {
        alert('가입되지 않은 회원입니다.');
        return loginFalse;
      }
    });
    // 리덕스 세팅 먼저 (state store 만들어 놓기)
    /* 비동기 처리 잘해야 된다 */
    // 서버로 유저의 정보를 보낸다
    // >> 실패(404) >> alert("실패") >> 로그인 화면(초기화 화면)
    // 로그인에 성공하면(200) >> refresh token과 access token을 받아와 쿠키에 넣어준다
    // history.goBack("메인 홈페이지 화면")
  };

  return (
    <center>
      <form onSubmit={onSubmit}>
        <h1>KMC</h1>
        <table bgcolor='#424242' cellSpacing='5'>
          <tr>
            <td>이메일</td>
            <td>
              <input
                type='email'
                placeholder='이메일을 작성하세요'
                value={email}
                onChange={emailCondition}
              />
            </td>
          </tr>

          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type='password'
                placeholder='비밀번호를 입력하세요'
                value={password}
                onChange={passwordCondition}
              />
            </td>
          </tr>
        </table>
        <input type='submit' value='로그인' onClick={checkMassage} />
      </form>
      {newUser && <button onClick={newUser}>처음 오셨나요?</button>}
    </center>
  );
};

export default LogInPage;

// redux 선물 - 시간여행 디버깅
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
