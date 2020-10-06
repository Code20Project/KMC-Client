import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore } from 'redux'; // redux 설정
// import { composeWithDevTools } from 'redux-devtools-extension'; // redux 설정
import { Provider } from 'react-redux'; // redux 설정
import './index.css';
import App from './App';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
// store를 생성한다 >> composewithDevTools()를 적용한다
const store = createStore(rootReducer);
const root = document.getElementById('root');

// Provider로 App을 랩핑한다(생성한 store를 넣어준다)
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  root,
);
