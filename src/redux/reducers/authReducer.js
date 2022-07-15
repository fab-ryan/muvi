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
const initialState = {
  userData: [],
  login: false,
  failed: false,
  LoginedIn: false,
  error: [],
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
        error: payload,
        login: false,
      };
    }
    case USER_LOGGES_IN:
      return {
        ...state,
        userData: payload,
        failed: false,
      };
    case REGISTER_FAILURE: {
      return {
        ...state,
        login: false,
        error: payload,
      };
    }
    case USER_HAS_LOGINED_IN_SUCCESS: {
      return {
        ...state,
        login: true,
        loginedIn: true,
      };
    }
    case USER_HAS_LOGINED_OUT_SUCCESS: {
      return {
        ...state,
        loginedIn: false,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        login: false,
      };
    }
    case REGISTER_SUCCESS:
      return { ...state, userData: payload, login: true };

    default:
      return state;
  }
};
