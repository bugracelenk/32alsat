import AuthReducer from "./auth";
import { combineReducers } from "redux";

export default combineReducers({
  auth: AuthReducer
});
