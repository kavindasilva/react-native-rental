
import {loginResponse} from '../mockAPIs/login'

export function login(username, password) {
    return loginResponse(username, password);
}

