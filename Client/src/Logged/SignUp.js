import React, { useState } from 'react';

// 1. e-mail
// 2. password
// 3. rePasswoord 패스워드 확인
// 4. nickname
// 5. 회원가입 버튼 >> 로그인 페이지로 이동
// 6. 취소 버튼 >> 로그인 페이지로 이동
// 7. [advanced]구글 회원가입 버튼
function SignUp(props) {
  // .env란? 환경변수를 설정해주는 모듈이다.4
  // console.log(process.env.REACT_APP_SERVER_HOST);
  // console.log(process.env.REACT_APP_SERVER_PORT);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordLengthError, setPasswordLengthError] = useState(false); // 패스워드 8자 이하 에러 메세지
  const [passwordError, setPasswordError] = useState(false); // 패스워드 일치 에러 메세지
  const [nickname, setNickname] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordSame, setPasswordSame] = useState(false);

  // url 주소를 변수에 담아준다.
  const url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/user/signup`;
  // 중복확인, fetch를 활용해서 생성한 이메일을 서버로 보내 이메일의 사용가능 여부를 판별한다
  const checkId = (event) => {
    console.log(checkId);
    // fetch로 url에 POST 메소드로 이메일 정보를 확인
    fetch(url, {
      method: 'POST',
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
  // 로그인 페이지로 돌아가기
  const backToLoginPage = (event) => {
    console.log(backToLoginPage);
  };
  // 가입하기 onSubmit
  //! [pass ? success : false], 삼항연사자 or switch 사용하기
  const onSubmit = (event) => {
    event.preventDefault();
    if (password.length < 8) {
      // alert('비밀번호는 8자리 이상이어야 됩니다.');
      setPasswordLengthError(true);
    } else if (password.length > 8) {
      // alert('사용가능한 비밀번호 입니다.');
      setPasswordSuccess(true);
    } else if (password !== passwordCheck) {
      // alert('비밀번호를 확인하세요');
      setPasswordError(true);
    } else if (password === passwordCheck) {
      //alert('비밀번호가 일치합니다.');
      setPasswordSame(true);
    } else {
      console.log(email, password, passwordCheck, nickname);
      alert('회원가입이 완료되었습니다.');
    }
  };

  return (
    <center>
      <form onSubmit={onSubmit}>
        <h1>회원가입</h1>
        <table bgcolor="#424242" cellspacing="5">
          <tr>
            <td> 이메일(ID) </td>
            <td>
              <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input type="button" value="중복확인" onClick={checkId} />
            </td>
          </tr>

          <tr>
            <td> 비밀번호 </td>
            <td>
              <input
                type="password"
                placeholder="비밀번호는 8자리 이상"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordLengthError && (
                <div style={{ color: 'red' }}>비밀번호는 8자리 이상</div>
              )}
              {passwordSuccess && (
                <div style={{ color: 'blue' }}>사용가능한 비밀번호 입니다.</div>
              )}
            </td>
          </tr>

          <tr>
            <td>비밀번호 확인</td>
            <td>
              <input
                type="password"
                placeholder="write same password"
                value={passwordCheck}
                onChange={(event) => setPasswordCheck(event.target.value)}
              />
              {passwordError && (
                <div style={{ color: 'red' }}>
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
              {passwordSame && (
                <div style={{ color: 'blue' }}>비밀번호가 일치합니다.</div>
              )}
            </td>
          </tr>

          <tr>
            <td>닉네임</td>
            <td>
              <input
                type="text"
                placeholder="Your nickname"
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
              />
            </td>
          </tr>
        </table>

        <input
          type="reset"
          value="로그인 화면으로 돌아가기"
          onClick={backToLoginPage}
        />
        <input type="submit" value="가입하기" />
      </form>
    </center>
  );
}

export default SignUp;
