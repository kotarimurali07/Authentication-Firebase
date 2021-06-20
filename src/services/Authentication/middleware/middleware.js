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
import { db } from "../../../config/firebaseConfig";

//login
export const handleEmail = (cred) => {
  console.log(db.collection("USERS").doc());
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    dispatch(emailLoginRequest());
    firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then((userDetails) => {
        const user = userDetails.user;
        // console.log(user);
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
//logout
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
//create-new-acount
export const handleSignup = (newUserData) => {
  // console.log(firestore);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(emailSignupRequest());
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUserData.email, newUserData.password)
      .then((res) => {
        return firestore
          .collection("USERS")
          .doc(res.user.id)
          .set({
            ...newUserData,
            createdAt: new Date(),
          });
      })
      .then((res) => {
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
//forgot-password
export const ForgotPassword = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .sendPasswordResetEmail(data.email)
      .then(() => {
        console.log("email send to email successfully....................");
        dispatch(forgotPassword());
      })
      .catch(() => {
        console.log("unable to send email link to email................");
      });
  };
};
