

import Button from '@mui/material/Button';
import jwt_decode from 'jwt-decode'

import { Navigate } from "react-router-dom";

import AuthService from '../services/AuthService';
import ConfigService from '../services/ConfigService'
import { useState } from 'react';

function Home() {
  const token = AuthService().isUserLoggedIn() && jwt_decode(AuthService().getCurrentToken());
  const [, setLoginToken] = useState('');

  const handleLogout = () => {
    AuthService().makeLogout();
    setLoginToken(AuthService().isUserLoggedIn());
  };

  return (
    <>
      {!AuthService().isUserLoggedIn() && <Navigate to={ConfigService.LOGIN_URL} replace={true} />}

      <div className="App">
        Home screen <b>{token.fullName}</b>
        <div>
          <Button variant="text" fullWidth={true} onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </>
  );
}

export default Home;
