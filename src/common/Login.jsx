
import { useState } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import {login} from '../services/loginService';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const loginUser = e => {
    console.log(e);
    e.preventDefault();
    setIsLoading(true);

    login(username, password).then(result => {
      setLoginError('')
      props.setLoginToken(result);
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
        <div><TextField type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"></TextField></div>
        <div><TextField type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"></TextField></div>
        <div><Button type="submit" variant="contained" disabled={isLoading} fullWidth={true}>Login</Button></div>

        {loginError && <Alert severity="error" onClose={() => setLoginError('')}>{loginError}</Alert>}
      </form>
    </div>
  );
}

export default Login;
