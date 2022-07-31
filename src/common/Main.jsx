

import { Link } from "react-router-dom";

import AuthService from '../services/AuthService';
import ConfigService from '../services/ConfigService'

function Main() {
  const showMenuItem = (isUserLoggedIn, showOnlyForLoggedInUser) => (isUserLoggedIn || !showOnlyForLoggedInUser);

  return (
    <div>
      <h4>Main page</h4>

      <ul>
        {ConfigService.appPages.map(page => showMenuItem(AuthService().isUserLoggedIn(), page.showOnlyForLoggedInUser) && <li key={page.url}>
          <Link to={page.url} replace={false}>{page.label}</Link>
        </li>)}
      </ul>
    </div>
  );
}

export default Main;
