import React from 'react';

const LoginTest = ({ login, loginTrue, loginFalse }) => {
  return (
    <center>
      <div>
        <h1> {login} </h1>
        <div>
          <button onClick={loginTrue}>True</button>
          <button onClick={loginFalse}>False</button>
        </div>
      </div>
    </center>
  );
};

export default LoginTest;
