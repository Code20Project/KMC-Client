import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LogInPage from './components/LoginPage';
import SignUp from './components/SignUp';
import Home from './components/Home';
// import logo from './logo.svg';
// import LoginTest from './components/loginTest';
// import LoginTestContainer from './containers/LoginTestContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="Contents-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Login" component={LogInPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

