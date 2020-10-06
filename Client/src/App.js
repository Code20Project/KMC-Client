import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <div className="Menu-wrapper">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/SignUp">
              <li>Community</li>
            </Link>
          </ul>
        </div> */}
        <div className="Contents-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
