
import { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import { useNavigate } from "react-router-dom";

import ConfigService from '../services/ConfigService'
import {login} from '../services/loginService';
import AuthService from '../services/AuthService';
// import StorageService from '../services/StorageService';

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    setIsLoggedIn(AuthService().isUserLoggedIn());
    if (isLoggedIn) {
      navigate(ConfigService.pageUrls.HOME_URL);
    }
  }, [isLoggedIn, navigate]);

  const loginUser = e => {
    console.log(e);
    e.preventDefault();
    setIsLoading(true);

    login(username, password).then(token => {
      setLoginError('')
      AuthService().makeLoginSuccess(token);
      setIsLoggedIn(AuthService().isUserLoggedIn());
    }).catch(error =>
      setLoginError(error)
    ).finally(() => 
      setIsLoading(false)
    );
  };
  

  return (
    <div className="App">
      <form onSubmit={loginUser} >
        Login
        <div><TextField id="txt_username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"></TextField></div>
        <div><TextField id="txt_password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"></TextField></div>
        <div><Button id="btn_submit" type="submit" variant="contained" disabled={isLoading} fullWidth={true}>Login</Button></div>

        {loginError && <Alert severity="error" onClose={() => setLoginError('')}>{loginError}</Alert>}
      </form>
    </div>
  );
}

export default Login;
