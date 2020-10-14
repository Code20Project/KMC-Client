import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux'; // redux 설정
// import { composeWithDevTools } from 'redux-devtools-extension'; // redux 설정
import { Provider } from 'react-redux'; // redux 설정
import { CookiesProvider } from 'react-cookie';

import Cookies from 'js-cookie';
import { createCookieMiddleware } from 'redux-cookie';

import './index.css';
import App from './App';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
// store를 생성한다 >> composewithDevTools()를 적용한다
const store = createStore(
  rootReducer,
  applyMiddleware(createCookieMiddleware(Cookies)),
);
const root = document.getElementById('root');

// Provider로 App을 랩핑한다(생성한 store를 넣어준다)
// 프로젝트 최상단(index.js)에 CookiesProvider를 사용합니다.
ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </CookiesProvider>,
  root,
);
