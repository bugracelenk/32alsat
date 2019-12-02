import { LOGOUT, USER_LOGIN, STORE_LOGIN } from '../actions/types';

const initialState = { loggedIn: false, loginType: "" };

export default (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN:
      return { loggedIn: true, loginType: "User" }
    case STORE_LOGIN:
      return { loggedIn: true, loginType: "Store"}
    case LOGOUT:
      return { loggedIn: false, loginType: "" }
    default: return state
  }
}