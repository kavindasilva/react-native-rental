
const SUCCESSFUL_CREDENTIALS = {
    username: 'root',
    password: 'root'
}
const PROMISE_TIMEOUT_MS = 200;

export function loginResponse(username, password) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(isCredentialsValid(username, password)) {
                resolve(defaultJwtToken);
            } else {
                reject('Username password not matching');
            }
        }, PROMISE_TIMEOUT_MS)
    });
}

function isCredentialsValid(username, password) {
    return username === SUCCESSFUL_CREDENTIALS.username && password === SUCCESSFUL_CREDENTIALS.password
}


/**
{
  "sub": "1234567890",
  "fullName": "Root User",
  "user": "root",
  "name": "Root User",
  "role": 1,
  "lastLoginTime": 1516239022,
  "iat": 1516239022
}
 */
const defaultJwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZnVsbE5hbWUiOiJSb290IFVzZXIiLCJ1c2VyIjoicm9vdCIsIm5hbWUiOiJSb290IFVzZXIiLCJyb2xlIjoxLCJsYXN0TG9naW5UaW1lIjoxNTE2MjM5MDIyLCJpYXQiOjE1MTYyMzkwMjJ9.FRaINzwgMf4EuDm2Dg9V3wELRUTPhk5TWHu_R72Apg8';

