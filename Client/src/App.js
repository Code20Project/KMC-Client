import React from 'react';
import { Route } from 'react-router-dom';
import LogInPage from './Logged/LogInPage';
import signUp from './Logged/SignUp';
// import logo from './logo.svg';

import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* 경로를 맞게 홈페이지를 등록해주는 작업 */}
      <Route exact path={['/', '/Login']} component={LogInPage} />
      <Route path="/signup" component={signUp} />
    </div>
  );
};

export default App;

// Switch 전환
// Route 경로
/*
<Route
        path="/"
        component={} 현영님이 만드신 홈페이지가 들어가야 합니다
        exact={true}/>
*/
// exact는  '/'의 경로 겹침으로 인한 화면 여러 컴포넌트가 나오는 현상을 해결하기 위한 옵션

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
