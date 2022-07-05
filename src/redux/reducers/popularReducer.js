import {
  IS_LOADING_DATA,
  GET_ALL_POPULAR_MOVIES,
  GET_ALL_POPULAR_SERIES,
} from "../";
const initialState = {
  error: [],
  isLoading: false,
  isLoaded: false,
  movies: [],
  series: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_POPULAR_MOVIES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        movies: payload,
      };
    case GET_ALL_POPULAR_SERIES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        series: payload,
      };
    default:
      return state;
  }
};
