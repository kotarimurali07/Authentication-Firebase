import { ACTION } from "./actionTypes";

//=================EMAIL-SIGNIN===========================//
export const emailLoginRequest = () => {
  return {
    type: ACTION.EMAIL_LOGIN_REQUEST,
  };
};

export const emailLoginSuccess = (payload) => {
  return {
    type: ACTION.EMAIL_LOGIN_SUCCESS,
    payload,
  };
};

export const emailLoginFailure = (Error) => {
  return {
    type: ACTION.EMAIL_LOGIN_FAILURE,
    Error,
  };
};

//=================FACEBOOK-SIGNIN===========================//

export const facebookLoginRequest = () => {
  return {
    type: ACTION.FACEBOOK_LOGIN_REQUEST,
  };
};

export const facebookLoginSuccess = () => {
  return {
    type: ACTION.FACEBOOK_LOGIN_SUCCESS,
  };
};

export const facebookLoginFailure = (Error) => {
  return {
    type: ACTION.FACEBOOK_LOGIN_FAILURE,
    Error,
  };
};

//=================GOOGLE-SIGNIN===========================//

export const googleLoginRequest = () => {
  return {
    type: ACTION.GOOGLE_LOGIN_REQUEST,
  };
};

export const googleLoginSuccess = (payload) => {
  return {
    type: ACTION.GOOGLE_LOGIN_SUCCESS,
    payload,
  };
};

export const googleLoginFailure = (Error) => {
  return {
    type: ACTION.GOOGLE_LOGIN_FAILURE,
    Error,
  };
};

//=================EMAIL-LOGOUT===========================//

export const emailLogoutRequest = () => {
  return {
    type: ACTION.EMAIL_LOGIN_REQUEST,
  };
};

export const emailLogoutSuccess = (payload) => {
  return {
    type: ACTION.EMAIL_LOGIN_SUCCESS,
    payload,
  };
};

export const emailLogoutFailure = (Error) => {
  return {
    type: ACTION.EMAIL_LOGIN_FAILURE,
    Error,
  };
};

//=================SIGN-UP-LOGOUT===========================//

export const emailSignupRequest = () => {
  return {
    type: ACTION.EMAIL_SIGNUP_REQUEST,
  };
};
export const emailSignupSuccess = () => {
  return {
    type: ACTION.EMAIL_LOGIN_SUCCESS,
  };
};
export const emailSignupFailure = () => {
  return {
    type: ACTION.EMAIL_SIGNUP_FAILURE,
  };
};
