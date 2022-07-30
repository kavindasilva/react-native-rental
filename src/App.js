
import { useState } from "react";

import './App.css';
import Login from './common/Login';
import Home from './common/Home';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginToken, setLoginToken] = useState('');

  return (
    <div className="App">
      {!loginToken && <Login setLoginToken={setLoginToken} />}
      {loginToken && <Home setLoginToken={setLoginToken} />}
    </div>
  );
}

/**
 * @TODO use routing to allow page refresh after login
 */

export default App;
