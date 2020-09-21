import React, { useState } from 'react';

// 1. e-mail
// 2. password
// 3. rePasswoord 패스워드 확인
// 4. nickname
//! props, state, life cycle에 대한 개념을 직관적으로 이해하고 관리하기 위해 Hook을 사용한다.

// .env란? 환경변수를 설정해주는 모듈이다.4
// console.log(process.env.REACT_APP_SERVER_HOST);
// console.log(process.env.REACT_APP_SERVER_PORT);
const SignUp = () => {
  // 이메일
  const [email, setEmail] = useState('');
  // 비밀번호
  const [password, setPassword] = useState('');
  // const [passwordSuccess, setPasswordSuccess] = useState(false);
  // 비밀번호 확인
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckSuccess, setPasswordCheckSuccess] = useState(false);
  // 닉네임
  const [nickName, setNickName] = useState('');

  // email
  const emailCondition = (e) => {
    console.log(email);
    setEmail(e.target.value);
  };
  // password
  const passwordCondition = (e) => {
    console.log(password);
    setPassword(e.target.value);
  };
  // passwordCheck
  const passwordCheckCondition = (e) => {
    console.log(passwordCheck);
    // 비밀번호를 입력할 때 마다 비밀번호를 검증하는 함수
    setPasswordCheckSuccess(e.target.value === password);
    setPasswordCheck(e.target.value);
  };
  //nickName
  const nickNameCondition = (e) => {
    console.log(nickName);
    setNickName(e.target.value);
  };

  // var emailRule = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  // 이메일 형식 정규식
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, passwordCheck, nickName);

    // 이메일
    if (email.length === 0) {
      return alert('이메일을 입력하세요');
    }
    // 비밀번호, 비밀번호 조건을 만든다.
    // 실시간 유효성 검사 할 수 있도록
    if (password.length === 0) {
      return alert('비밀번호를 입력하세요');
    } else if (password.length < 8) {
      return alert(
        '입력하신 비밀번호는 8자리 이하입니다. 비밀번호는 8~20 자리 사이로 구성되어야 합니다.',
      );
    } else if (password.length > 20) {
      return alert(
        '입력하신 비밀번호는 20자리 이상입니다. 비밀번호는 8~20 자리 사이로 구성되어야 합니다.',
      );
    }
    // 비밀번호 확인
    if (passwordCheck.length === 0) {
      return alert('비밀번호 확인을 입력하세요');
    }
    if (password !== passwordCheck) {
      return alert('입력하신 비밀번호가 다릅니다. 다시 확인하세요');
    } else {
      setPasswordCheckSuccess(true); // 사용가능 문자를 실시간으로 어떻게 대입할까?
    }
    if (nickName.length === 0) {
      alert('닉네임을 입력하세요');
    } else {
      alert('회원이 되신 것을 환영합니다.');
    }
  };
  // 렌더링
  return (
    <center>
      <form onSubmit={onSubmit}>
        <h1>회원가입</h1>
        <table bgcolor="#424242" cellspacing="5">
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
                value={passwordCheck}
                onChange={passwordCheckCondition}
              />
              {passwordCheckSuccess && (
                <div style={{ color: 'blue' }}>
                  입력하신 비밀번호가 동일합니다.
                </div>
              )}
            </label>
          </tr>

          <tr>
            <label>
              닉네임
              <input
                type="text"
                name="nickName"
                placeholder="닉네임을 입력하세요"
                value={nickName}
                onChange={nickNameCondition}
              />
            </label>
          </tr>
          <center>
            <input type="submit" value="로그인 화면으로 돌아가기" />
            <input type="submit" value="가입하기" />
          </center>
        </table>
      </form>
    </center>
  );
};

export default SignUp;

/*
1. 윤혁님의 단계를 잘 모름
2. 6개월 8개월 정도 코드를 공부
4. 코드를 몰라서 -> 회원가입 폼을 윤혁님은 어느 정도 머릿 속에서 구현을 하셨어요. 에디터 상에도 나왔어요. -> 이거는 구글링 하는ㄱ ㅔ아니에요
5. 윤혁님이 어떤 로직이든 간에 회원가입이 윤혁님의 아읻이어대로 구현이 되면, 그게 회원가입 폼이에요
6. 인피니티 스크롤,  감이 안 잡히는거요 -> 기능 남의 코드를 봐야 되요 -> 인풋
7. 프로젝트를 할 떄, 엄청 많은 기능이 들어가요. 로그인/회우너가입은 기본중의 기본. 인피니티 스크롤. 레이지 로드. 페이지네이션. 게시판 -> 남의 코드를 최대한 많ㅇ ㅣ봐야 되요  ->
8. 남의 코드를 안 보면은 이게 어떻게 생겨먹엇는지 몰라요
9. 우릭 ㅏ코드가 어려운 이유는 자꾸 무에서 유를 창조하려고 하기 때문에 어려운거에요 -> 무를 유로 바꿔야 되요 -> 유에서 유
10. ㄱ시판을 만든다? 구글을 하는거에요

- 이론
1. 비동기함수,
2. 리액트에서 함수를 표현하는 방법 - 훅
*/

/*
1. 훅스를 안 써요 훅스로 바꾸는 작업도 좋아
2. 리덕스 / 사가

3. 공식문서 코드를 그대로 쳐보기
4. 리액트 훅 폼 쓰지 말 것. 지금처럼 처음부터 윤혁님이 하나하나 만들 것
*/

/*
- 키보드와 마우스에서 손을 뗄 것
*/

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
