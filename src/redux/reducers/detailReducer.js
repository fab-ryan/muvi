import { GET_MOVIE_DETAIL, ERROR_DATA, IS_LOADING_DATA } from "../";

const initialState = {
  movieDetail: [],
  detail_loading: false,
  error: [],
  isLoading: false,
  isLoaded: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        movieDetail: payload,
      };
    default:
      return state;
  }
};
