import React, { useState } from 'react';
// import App from '../App';
const axios = require('axios'); // axios (http 통신을 위한 라이브러리)

// 1. e-mail
// 2. password
// 3. rePasswoord 패스워드 확인
// 4. nickname
//! props, state, life cycle에 대한 개념을 직관적으로 이해하고 관리하기 위해 Hook을 사용한다.

// .env란? 환경변수를 설정해주는 모듈이다.4
// console.log(process.env.REACT_APP_SERVER_HOST);
// console.log(process.env.REACT_APP_SERVER_PORT);
const SignUp = ({ history }) => {
  // 이메일, 비밀번호, 비밀먼호 확인, 닉네임
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [nickname, setNickname] = useState('');

  // email
  const emailCondition = (e) => {
    // console.log(email);
    setEmail(e.target.value);
  };

  // password
  const passwordCondition = (e) => {
    // console.log(password);
    setPassword(e.target.value);
  };

  // passwordVerify
  const passwordVerifyCondition = (e) => {
    // console.log(passwordVerify);
    setPasswordVerify(e.target.value);
  };

  // nickName
  const nicknameCondition = (e) => {
    // console.log(nickname);
    setNickname(e.target.value);
  };

  // 비밀번호 확인
  const passwordCheck = () => {
    if (password.length > 0 && passwordVerify.length > 0) {
      if (password === passwordVerify) {
        return (
          <div style={{ color: 'blue' }}>입력하신 비밀번호가 동일합니다.</div>
        );
      } else if (password !== passwordVerify) {
        return (
          <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
        );
      }
    } else if (password.length < 0 || passwordVerify.length > 0) {
      return <div style={{ color: 'red' }}>위의 비밀번호를 입력해주세요</div>;
    }
  };

  // 빈 칸 확인 메세지 >> 로그인 페이지로 돌아가는 기능
  const backToLogin = () => {
    history.push('/Login');
    // 비활성화 기능 때문에 클릭이 안되니 에러메세지를 띄울 수가 없다.
    // 빈칸이 있을 시 에러메세지를 띄워준다
  };
  const backToMainHome = () => {
    history.push('/');
  };

  const url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/user/signup`;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, passwordVerify, nickname);
    // 입력한 정보를 서버에 보낸준다
    axios({
      method: 'post',
      url: url,
      data: {
        email: email,
        password: password,
        nickname: nickname,
      },
    }).then((res) => {
      console.log('응답', res);
      // 서버에 보낸 결과가 200일 경우 회원가입 완료 메세지
      if (res.status === 201) {
        alert('회원가입이 완료되었습니다');
        history.push('/Login');
        // 로그인 페이지로 이동하기
      }
      if (res.status === 409) {
        alert('이미 가입된 회원입니다');
      }
    });
  };

  // 버튼 비활성화 조건
  const enabled =
    email.length > 0 &&
    password.length > 0 &&
    passwordVerify.length > 0 &&
    nickname.length > 0;

  //! 로그인 페이지 구현 후 로그인 화면으로 돌아가기 클릭 시 로그인 페이지로 이동 기능 구현 해야함
  // 렌더링
  return (
    <center>
      <form onSubmit={onSubmit}>
        <h1>회원가입</h1>
        <table bgcolor="#424242" cellSpacing="5">
          <tr>
            <label>
              이메일
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={emailCondition}
              />
            </label>
          </tr>

          <tr>
            <label>
              비밀번호
              <input
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={passwordCondition}
              />
            </label>
          </tr>

          <tr>
            <label>
              비밀번호 확인
              <input
                type="password"
                name="passwordCheck"
                placeholder="비밀번호를 다시 입력하세요"
                value={passwordVerify}
                onChange={passwordVerifyCondition}
              />
              {passwordCheck()}
            </label>
          </tr>

          <tr>
            <label>
              닉네임
              <input
                type="text"
                name="nickName"
                placeholder="닉네임을 입력하세요"
                value={nickname}
                onChange={nicknameCondition}
              />
            </label>
          </tr>
          <center>
            <button onClick={backToLogin}>로그인 화면으로 돌아가기</button>
            <input
              type="submit"
              value="가입하기"
              // onClick={checkMassage} // 비활성화 클릭 X
              disabled={!enabled}
            />
          </center>
          <center>
            <button onClick={backToMainHome}>메인 홈페이지</button>
          </center>
        </table>
      </form>
    </center>
  );
};

export default SignUp;

//? html, css를 이용해 정적으로 홈페이지를 만들 수 있다
//? 그러나 동적으로 만들기 위해 react 안에서 jsx문법으로 동적으로 만든다
//? 컴포넌트를 하나의 기능대로 각각 분리한다
//? 유효성 검사 또한 실시간으로 렌더링한다.

// 중복확인
// fetch를 활용해서 생성한 이메일을 서버로 보내 이메일의 사용가능 여부를 판별한다
/*
  const url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/user/signup`;
  const checkEmail = (e) => {
    console.log('중복확인', checkEmail);
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    }).then((res) => {
      // 백엔드에 보낸 결과가 200일 경우
      if (res.status === 200) {
        alert('사용가능한 이메일 입니다.');
        // 사용 가능한 이메일이면 email의 state상태 true로 변경
        setEmail({ email: true });
      } else if (res.status === 409) {
        // 백엔드에 결과가 409일 경우
        alert('이미 사용중인 이메일 입니다.');
      } else {
        // 그 외에는 사용불가 알림
        alert('사용 불가능한 아이디입니다.');
      }
    });
  };
  */

// if (email.length === 0) {
//   return alert('이메일을 입력하세요');
// }
// if (password.length === 0) {
//   return alert('비밀번호를 입력하세요');
// }
// if (passwordVerify.length === 0) {
//   return alert('비밀번호 확인을 입력하세요');
// }
// if (nickname.length === 0) {
//   return alert('닉네임을 입력하세요');
// }
// 다시 로그인 화면으로 갈 수 있도록 하는 >> history.push('/Login');
