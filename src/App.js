
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './common/Login';
import Home from './common/Home';
import Page404 from './common/Page404';

import ConfigService from './services/ConfigService'


function App() {
  const defaultPageUrl = ConfigService.LOGIN_URL;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={defaultPageUrl} element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path={ConfigService.HOME_URL} element={<Home />} />
        <Route path={ConfigService.ABOUT_URL} element={<div>About page</div>} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    );
}



/**
 * @TODO use routing to allow page refresh after login
 */

export default App;
