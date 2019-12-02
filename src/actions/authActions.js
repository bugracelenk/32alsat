import { LOGOUT, USER_LOGIN, STORE_LOGIN } from './types';

export function userLogin() {
  return {
    type: USER_LOGIN
  }
}

export function storeLogin() {
  return {
    type: STORE_LOGIN
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}