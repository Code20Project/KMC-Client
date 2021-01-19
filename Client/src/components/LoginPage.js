import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions';
// react Cookie
import { useCookies } from 'react-cookie';

// npmJS cookie - https://www.npmjs.com/package/react-cookie
// jwt
// 정보를 보내고 응답이오면
// x-access-token && x-refresh token cookie에 저장
// body에 있는 nickname을 리덕스 스토어에 저장한다(reducer)

// 라우터로 전달받은 prameter 설정
const LogInPage = ({ history }) => {
  // 값을 세팅하는 함수
  // 서버에 보내줄 정보
  // Button의 상태를 결정할 함수 >> token이 있다면, 유저의 정보를 가져온다.

  // 로그인 입력창,패스워드 입력창, 로그인 버튼, 처음 오셨나요 >> 회원가입 페이지로 이동
  // 로그인 시, 로그아웃 버튼
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // react cookie
  const [cookies, setCookie] = useCookies(['name']);

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
  const backToMainHome = () => {
    history.push('/');
  };

  const url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/user/signin`;
  const onSubmit = (e, newName) => {
    e.preventDefault();
    console.log(email, password);

    axios({
      method: 'post',
      url: url,
      data: JSON.parse(
        JSON.stringify({
          email: email,
          password: password,
        }),
      ),
    }).then((res) => {
      console.log('응답', res);
      if (res.status === 200) {
        console.log('status 200');
        alert('로그인에 성공했습니다.');
        setCookie('name', newName, { path: '/' });
      }
      if (res.status === 501) {
        console.log('status  501');
        alert('가입되지 않은 회원입니다.');
      }
    });
    //로그인을 진행하기위해서
    //첫번째 useDispatch(액션) 을 활용해서 액션을 dispatch해준다

    // promise 개념에 대해 학습하기
    // 리덕스를 사용할 때 비동기 처리가 들어가야 한다. <Promise, async, await>
    // token을 함수에 저장하기, 함수를 따로 작성
    // redux login: false -> login: true
    // body 닉네임, 리덕스 스토어에 저장
  };

  //버튼 비활성화 조건
  // const enabled = email.length > 0 && password.length > 0;

  return (
    <center>
      <form onSubmit={onSubmit}>
        <h1>KMC</h1>
        <table bgcolor="#A9E2F3" cellSpacing="5">
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
        <input
          type="submit"
          value="로그인"
          onClick={checkMassage}
          // disabled={!enabled}
        />
        {newUser && <button onClick={newUser}>처음 오셨나요?</button>}
      </form>
      <button onClick={backToMainHome}>메인 홈페이지</button>
    </center>
  );
};

export default withRouter(LogInPage);

// redux 선물 - 시간여행 디버깅
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/*
 axios({
      method: 'post',
      url: url,
      data: JSON.parse(
        JSON.stringify({
          email: email,
          password: password,
        }),
      ),
    }).then((res) => {
      // console.log('응답', res);
      // 서버에 보낸 결과가 200인 경우 token을 받아온다
      if (res.status === 200) {
        console.log('status 200');
        alert('로그인에 성공했습니다.');
        // 1. access token, refresh token을 쿠키에 저장하는 것
        // const { x-reflesh-token, x-access-token } = res.headers;
        setCookie('name', newName, history.push('/'));
        console.log('res Header: ', res.headers);
        console.log('res Data: ', res.data);
        // 2. redux login: false -> login: true
        // 리덕스를 사용할 때 비동기 처리가 들어가야 한다. <Promise, async, await>
        return loginTrue;
        // 3. body 닉네임, 리덕스 스토어에 저장
      }
      // 서버에 보낸 결과가 409일 경우 가입되지 않은 회원입니다
      if (res.status === 501) {
        console.log('status  501');
        alert('가입되지 않은 회원입니다.');
        return loginFalse;
      }
    });
*/
