
const successfulCredentials = {
    username: 'root',
    password: 'root'
}

export function login(username, password) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(username === successfulCredentials.username && password === successfulCredentials.password) {
                resolve(defaultJwtToken);
            }
            else {
                reject('Username password not matching');
            }
        })
    });
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

function createAuthToken() {}
