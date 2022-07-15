import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  USER_HAS_LOGINED_IN_SUCCESS,
  USER_HAS_LOGINED_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
  USER_LOGGES_IN,
  LOGOUT_USER,
} from "../";
import actions from "./actions";
import firebase from "../../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const loginUser = (email, password) => async (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      var user = userCredential.user;
      // await AsyncStorage.setItem("user", user);
      dispatch(actions(LOGIN_SUCCESS, user));
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(actions(LOGIN_FAILURE, errorCode + errorMessage));
    });
};
export const userLoggedIn = () => async (dispatch) => {
  try {
    let value = await AsyncStorage.getItem("user");
    console.log(value);
    if (value !== null) {
      // value previously stored
      dispatch(actions(USER_LOGGES_IN, value));
    }
  } catch (e) {
    // error reading value
    console.log(e.message);
  }
};

export const RegisterUser = (email, password) => async (dispatch) => {
  try {
    console.log(email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        alert("User Created Successfully");
        dispatch(actions(REGISTER_SUCCESS, user));
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode + errorMessage);
        dispatch(actions(REGISTER_FAILURE, errorMessage));
      });
  } catch (error) {
    console.log(error);
  }
};

export const UserStateChange = () => async (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      dispatch(actions(USER_HAS_LOGINED_IN_SUCCESS, uid));
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
export const logOut = () => (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      dispatch(actions(LOGOUT_USER));
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};
