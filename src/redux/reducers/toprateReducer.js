import { IS_LOADING_DATA, GET_ALL_TOP_RATED } from "../";
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
    case GET_ALL_TOP_RATED:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        response: payload,
      };
    default:
      return state;
  }
};
