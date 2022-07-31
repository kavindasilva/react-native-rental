
import StorageService from './StorageService';

const LOGIN_TOKEN = 'auth'

export default function AuthService() {
  const makeLoginSuccess = token => {
    StorageService().setItemLocalStorage(LOGIN_TOKEN, token);
  };

  const makeLogout = () => {
    StorageService().deleteItemLocalStorage(LOGIN_TOKEN);
  };

  const getCurrentToken = () => {
    return StorageService().getItemLocalStorage(LOGIN_TOKEN);
  };

  const isUserLoggedIn = () =>  !!StorageService().getItemLocalStorage(LOGIN_TOKEN);

  return {
    makeLoginSuccess: makeLoginSuccess,
    makeLogout: makeLogout,
    getCurrentToken: getCurrentToken,
    isUserLoggedIn: isUserLoggedIn,
  };
}
