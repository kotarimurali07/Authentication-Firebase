import { initialState } from "./emailState";
import { ACTION } from "../actions/actionTypes";

export const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.EMAIL_LOGIN_REQUEST:
      return {
        isLoading: true,
      };
    case ACTION.EMAIL_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION.EMAIL_LOGIN_FAILURE:
      return {
        isLoading: false,
      };
    case ACTION.EMAIL_LOGOUT_REQUEST:
      return {
        isLoading: true,
      };
    case ACTION.EMAIL_LOGOUT_SUCCESS:
      return {
        isLoading: false,
      };
    case ACTION.EMAIL_LOGOUT_FAILURE:
      return {
        isLoading: false,
      };
    case ACTION.EMAIL_SIGNUP_REQUEST:
      return {
        isSignOut: false,
      };
    case ACTION.EMAIL_SIGNUP_SUCCESS:
      return {
        isSignOut: true,
      };
    case ACTION.EMAIL_SIGNUP_FAILURE:
      return {
        isSignOut: false,
      };
    default:
      return {
        state,
      };
  }
};
