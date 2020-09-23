import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import LogInPage from './Logged/LogInPage';
import SignUp from './Logged/SignUp';

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root,
);

// export { default as App } from './App';
// export { default as SignUp } from './Logged/SignUp';
