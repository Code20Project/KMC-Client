import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

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

  // 로그인 구분 (로그인시 사용한 이메일(id)로 구분.)
  // 로그인 유무에 따라 글쓰기,댓글 기능 활성화 필요

  return (
    <div className="Home">
      <header className="Mainhome-header">
        <div className="top-list">
          <div className="logo">KMC</div>
          <div className="searching">
            <input className="search_text" type="text" />
            <button className="search_btn" type="submit" onClick={searchClick}>
              <img
                className="search_img"
                src="https://cdn.icon-icons.com/icons2/2406/PNG/512/search_magnifier_icon_145939.png"
                alt=""
              />
            </button>
          </div>
          <div className="Register">
            <span className="login" role="presentation">
              로그인
            </span>
            <span className="signup" role="presentation">
              <Link to="/signup"> 회원가입 </Link>
            </span>
          </div>
        </div>
        <ul className="menu-list">
          <li id="menu-list-home" role="presentation" onClick={clickboardList}>
            <span>홈</span>
          </li>
          <li className="dropdown" role="presentation">
            <span className="boardList">게시판</span>
            <div className="listBoard-content">
              <span>자유게시판</span>
              <span>공부팁 & 노하우</span>
              <span>취업준비</span>
            </div>
          </li>
          <li id="menu-list-assessment" role="presentation">
            <span>강의평가</span>
          </li>
        </ul>
      </header>
      <div id="mainHomeList">{setBoardTypes}</div>
    </div>
  );
}

export default Home;
