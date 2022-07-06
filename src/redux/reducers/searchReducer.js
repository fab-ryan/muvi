import {
  IS_LOADING_DATA,
  ERROR_DATA,
  SEARCH_ALL_SERIES,
  SEARCH_ALL_RESULTS,
  SEARCH_ALL_MOVIES,
} from "../";
const initialState = {
  error: [],
  isLoading: false,
  isLoaded: false,
  result: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_ALL_RESULTS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        result: payload,
      };
    case SEARCH_ALL_MOVIES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        result: payload,
      };
    case SEARCH_ALL_SERIES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        result: payload,
      };
    case ERROR_DATA:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
