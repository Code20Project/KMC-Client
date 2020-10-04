# 로그인

> > 1.  User가 정보를 입력하고 서버에 보낸다.(request)

2. 서버에서 DB에 있는 사용자의 정보를 확인한다.
3. 서버에서 회원 정보 세션을 생성해 세션저장소에 보낸다.
4. 세션 저장소에서 세션ID를 발급 받아 서버에 가져온다.

> > 5.  서버가 세션ID를 사용자에게 준다.(응답)
> >     세션ID를 받아오면 프론트 측에서 "쿠키(cookie)"에 저장을 해야한다.
> >     cookie(access token & refresh token), redux store를 사용한다.
> > 6.  데이터(+쿠키)를 서버에 요청한다. (token)

7. 서버에서 DB에 쿠키를 검증한다.
8. 세션 저장소에서 유저정보(세션)을 획득한다.

> > 9. 서버에서 유저에게 응답(+요청데이터)해준다.

- 로그아웃 경우 refresh token를 서버에 삭제 요청을 한다.
- 서버에서 refresh token이 제대로 삭제 되었다는 status200 응답을 받으면,
  cookie에 있는 access token & refresh token을 삭제해준다

---

>> 로그아웃
{
fetchingUpdate: false,
isLoggedIn: true,
user: {},
}
>> 로그인 시도중
{
fetchingUpdate: true,
isLoggedIn: true,
user: {},
}
>> 로그인
{
fetchingUpdate: false,
isLoggedIn: true,
user: { 'name': 'ZeroCho' },
}
