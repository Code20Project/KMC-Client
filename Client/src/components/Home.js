import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import searchIcon from '../img/search_magnifier.png';
import { loginFalse, loginTrue } from '../actions';

function Home() {
  const [boardType, setBoardType] = useState([]);
  // console.log('boardType', boardType);

  const setBoardTypes = boardType.map((board) => (
    <div id={board.id}>{board.typename}</div>
  ));

  // server에서 board정보 요청
  const getFetchData = (url) => {
    console.log(
      `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`,
    );
    fetch(
      `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}${url}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setBoardType(res.boardtype);
        console.log(boardType);
      });
  };
  // 검색
  const searchClick = (e) => {
    e.preventDefault();
    console.log('serarch_btn Click');
    getFetchData('/board');
  };

  // 클릭시 모든 게시판의 리스트 불러오기
  const clickboardList = (e) => {
    e.preventDefault();
    getFetchData('/board');
  };

  // ComponentDidMount
  // 한번만 실행하고 싶을경우 빈 배열을 두번째 인자로 넘겨줄것.
  // 참고 사이트 https://ko.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    // console.log('useEffect test 합니다.');
    getFetchData('/board');
  }, []);

  // 로그인 구분 (로그인시 사용한 이메일(id)로 구분.)
  // 로그인 성공시 -> 로그인부분에 유저닉네임과 함께 로그인 상태 표시, 회원가입부분에 로그아웃 표시
  // 로그인 유무에 따라 글쓰기,댓글 기능 활성화

  return (
    <div className="Home">
      <header className="Mainhome-header">
        <div className="top-list">
          <div className="logo">KMC</div>
          <div className="searching">
            <input className="search_text" type="text" />
            <button className="search_btn" type="submit" onClick={searchClick}>
              <img className="search_img" src={searchIcon} alt="searchIcon" />
            </button>
          </div>
          <div className="Register">
            <span className="login" role="presentation">
              <Link to="/login"> 로그인 </Link>
            </span>
            <span className="signup" role="presentation">
              <Link to="/signup"> 회원가입 </Link>
            </span>
          </div>
        </div>
        <ul className="menu-list">
          <li id="menu-list-home" role="presentation" onClick={clickboardList}>
            <a>홈</a>
          </li>
          <li className="dropdown" role="presentation">
            <a className="boardList">게시판</a>
            <div className="listBoard-content">{setBoardTypes}</div>
          </li>
          <li role="presentation">
            <a>강의평가</a>
          </li>
        </ul>
      </header>
      <div className="mainHomeList">{setBoardTypes}</div>
    </div>
  );
}

export default Home;
