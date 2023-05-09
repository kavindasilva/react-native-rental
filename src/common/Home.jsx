

import jwt_decode from 'jwt-decode'

import { Navigate } from "react-router-dom";

import AuthService from '../services/AuthService';
import ConfigService from '../services/ConfigService'

import ProfileButton from '../components/ProfileButton';
import LogoutButton from '../components/LogoutButton';
import VehicleTable from '../components/vehicle/VehicleTable';

function Home() {
  const token = AuthService().isUserLoggedIn() && jwt_decode(AuthService().getCurrentToken());

  

  return (
    <>
      {!AuthService().isUserLoggedIn() && <Navigate to={ConfigService.pageUrls.LOGIN_URL} replace={true} />}

      <div className="App">
        <ProfileButton></ProfileButton>
        Home screen <b>{token.fullName}</b>
        <VehicleTable />
        <div>
          <LogoutButton />
        </div>
      </div>
    </>
  );
}

export default Home;
