// router, cookie, async && await
import React, { useState, useReducer } from 'react';
import {
  BrowserRouter,
  Switch,
  Router,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import cookie from 'react-cookie';
import { connect } from 'react-redux';
import '../App.css';
import SignUp from './SignUp';
import ReactDOM from 'react-dom';

//! 1. User가 정보를 입력하고 서버에 보낸다.(request)
//* 2. 서버에서 DB에 있는 사용자의 정보를 확인한다.
//* 3. 서버에서 회원 정보 세션을 생성해 세션저장소에 보낸다.
//* 4. 세션 저장소에서 세션ID를 발급 받아 서버에 가져온다.
// // ! 5. 서버가 세션ID를 사용자에게 준다.(응답)
// 세션ID를 받아오면 프론트 측에서 "쿠키(cookie)"에 저장을 해야한다.
// cookie(access token & refresh token), redux store를 사용한다.
//! 6. 데이터(+쿠키)를 서버에 요청한다. (token)
//* 7. 서버에서 DB에 쿠키를 검증한다.
//* 8. 세션 저장소에서 유저정보(세션)을 획득한다.
//! 9. 서버에서 유저에게 응답(+요청데이터)해준다.

// - 로그아웃 경우 refresh token를 서버에 삭제 요청을 한다.
// - 서버에서 refresh token이 제대로 삭제 되었다는 status200 응답을 받으면,
//   cookie에 있는 access token & refresh token을 삭제해준다.

// 라우터로 전달받은 prameter 설정
function LogInPage({ router, token }) {
  // 값을 세팅하는 함수
  // 서버에 보내줄 정보
  // Button의 상태를 결정할 함수 >> token이 있다면, 유저의 정보를 가져온다.

  // 로그인 입력창,패스워드 입력창, 로그인 버튼, 처음 오셨나요 >> 회원가입 페이지로 이동
  // 로그인 시, 로그아웃 버튼
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailCondition = (e) => {
    console.log(email);
    setEmail(e.target.value);
  };

  const passwordCondition = (e) => {
    console.log(password);
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

  const url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/user/signup`;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // 서버로 유저의 정보를 보낸다.
    // 있는 회원이라면,
  };

  return (
    <center>
      <form onSubmit={onSubmit}>
        <h1>KMC</h1>
        <table bgcolor="#424242" cellspacing="5">
          <tr>
            <td>이메일</td>
            <td>
              <input
                type="email"
                placeholder="이메일을 작성하세요"
                value={email}
                onChange={emailCondition}
              />
            </td>
          </tr>

          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={passwordCondition}
              />
            </td>
          </tr>
        </table>
        <input type="submit" value="로그인" onClick={checkMassage} />
      </form>
      <button>
        <Link to="/signup">처음 오셨나요?</Link>
      </button>
    </center>
  );
}

export default LogInPage;
