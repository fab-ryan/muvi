import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  USER_HAS_LOGINED_IN_SUCCESS,
  USER_HAS_LOGINED_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from "../";
import auth from "firebase/auth";
import actions from "./actions";
import firebase from "../../utils/config";
import { Alert } from "react-native";
export const loginUser = (email, password) => async (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      dispatch(actions(LOGIN_SUCCESS, user));
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(actions(LOGIN_FAILURE, errorCode + errorMessage));
    });
};

export const RegisterUser = (email, password) => async (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      dispatch(actions(REGISTER_SUCCESS, user));
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(actions(REGISTER_FAILURE, errorMessage));
    });
};

export const UserStateChange = () => async (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      dispatch(actions(USER_HAS_LOGINED_IN_SUCCESS, user));
    } else {
      dispatch(actions(USER_HAS_LOGINED_OUT_SUCCESS));
    }
  });
};

export const SignUpWithGoogle = () => async (dispatch) => {
  firebase.auth().signInWithRedirect(provider);
  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      dispatch(actions(SIGN_UP_SUCCESS, user));
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      dispatch(actions(SIGN_UP_FAILED, email, credential));
    });
};
