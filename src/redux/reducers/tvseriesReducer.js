import { IS_LOADING_DATA, GET_ALL_TV_SERIES } from "../";
const initialState = {
  error: [],
  isLoading: false,
  isLoaded: false,
  series: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_TV_SERIES:
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
