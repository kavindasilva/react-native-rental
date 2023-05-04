
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import './App.css';
import Login from './common/Login';
import Home from './common/Home';
import Main from './common/Main';
import Vehicles from './Vehicle/Vehicles';
import Page404 from './common/Page404';

import ConfigService from './services/ConfigService'
import AuthService from './services/AuthService';


function App() {
  const defaultPageUrl = '/';

  return (
    <BrowserRouter>
      <Routes>
        <Route path={defaultPageUrl} element={<Main />} />
        <Route path={ConfigService.pageUrls.LOGIN_URL} element={<Login />} />
        <Route path={ConfigService.pageUrls.HOME_URL} element={<Home />} />
        <Route path={ConfigService.pageUrls.ABOUT_URL} element={<RequireAuth><div>About page</div></RequireAuth>} />
        <Route path={ConfigService.pageUrls.VEHICLES} element={<RequireAuth><Vehicles /></RequireAuth>} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    );
}


function RequireAuth({ children }) {
  let location = useLocation();

  if (!AuthService().isUserLoggedIn()) {
    return <Navigate to={ConfigService.pageUrls.LOGIN_URL} state={{ from: location }} replace />;
  }

  return children;
}

export default App;
