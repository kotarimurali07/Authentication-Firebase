import { emailReducer } from "./emailReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
export const rootReducer = combineReducers({
  email: emailReducer,
  firebase: firebaseReducer,
});
