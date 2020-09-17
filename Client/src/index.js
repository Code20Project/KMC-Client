import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import testAPI from './Test/TestAPI';
import LogInPage from './Logged/LogInPage';
// import SignUp from './Logged/SignUp';
//! 띄우고자 하는 화면은 <App /> 를 수정해서 다른 Component를 넣어주면 된다.

const root = document.getElementById('root');
ReactDOM.render(<LogInPage />, root);
// ReactDOM.render(<SignUp />, root);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
