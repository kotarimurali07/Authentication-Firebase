import {
  emailLoginRequest,
  emailLoginSuccess,
  emailLoginFailure,
  googleLoginRequest,
  googleLoginSuccess,
  googleLoginFailure,
  facebookLoginRequest,
  facebookLoginSuccess,
  facebookLoginFailure,
  emailLogoutRequest,
  emailLogoutSuccess,
  emailLogoutFailure,
  emailSignupRequest,
  emailSignupSuccess,
  emailSignupFailure,
  forgotPassword,
} from "../actions/actionCreators";
export const handleEmail = (cred) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(emailLoginRequest());

    firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then((userDetails) => {
        const user = userDetails.user;
        console.log(user);
        console.log("user logged in successfulyy");
        dispatch(emailLoginSuccess());
      })
      .catch((err) => {
        console.log(err);
        dispatch(emailLoginFailure());
        console.log("user logged in failed");
      });
  };
};
export const handleEmailSignout = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(emailLoginRequest());
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log(`signout successfully`);
        dispatch(emailLogoutSuccess());
      })
      .catch((err) => {
        console.log(err);
        dispatch(emailLogoutFailure());
      });
  };
};
export const handleSignup = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(emailSignupRequest());
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userdetails) => {
        console.log("USER CREATED SUCCESS FULLY");
        dispatch(emailSignupSuccess());
      })
      .catch((err) => {
        console.log(err);
        console.log("UNABLE TO CREATE - USER");
        dispatch(emailSignupFailure());
      });
  };
};
export const ForgotPassword = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .sendSignInLinkToEmail(data.email)
      .then(() => {
        console.log("email send to your mail....................");
        dispatch(forgotPassword());
      })
      .catch(() => {
        console.log("unable to send email link to email................");
      });
  };
};
