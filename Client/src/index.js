import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
// import LogInPage from './Logged/LogInPage';
import SignUp from './Logged/SignUp';

const root = document.getElementById('root');

ReactDOM.render(<SignUp />, root);

// export { default as App } from './App';
// export { default as SignUp } from './Logged/SignUp';
