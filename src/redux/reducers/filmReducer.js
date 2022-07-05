import { IS_LOADING_DATA, GET_ALL_FILM } from "../";
const initialState = {
  error: [],
  isLoading: false,
  isLoaded: false,
  film: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_FILM:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        film: payload,
      };
    default:
      return state;
  }
};
