import { GET_ALL_NOW_PLAYING_MOVIE, ERROR_DATA, IS_LOADING_DATA } from "../";
const initialState = {
  error: [],
  isLoading: false,
  isLoaded: false,
  response: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ALL_NOW_PLAYING_MOVIE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        response: payload,
      };
    case ERROR_DATA:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
