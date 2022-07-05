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
const initialState = {
  userData: [],
  login: false,
  failed: false,
  LoginedIn: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: payload,
        login: true,
        failed: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        userData: payload,
        failed: true,
        login: false,
      };
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        userData: payload,
        login: true,
        failed: false,
      };
    }
    case SIGN_UP_FAILED: {
      return {
        ...state,
        userData: payload,
        login: false,
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        login: true,
        userData: payload,
      };
    }
    case USER_HAS_LOGINED_IN_SUCCESS: {
      return {
        ...state,
        loginedIn: true,
      };
    }
    case USER_HAS_LOGINED_OUT_SUCCESS: {
      return {
        ...state,
        loginedIn: false,
      };
    }
    case REGISTER_SUCCESS:
      return { ...state, userData: payload };
    default:
      return state;
  }
};
