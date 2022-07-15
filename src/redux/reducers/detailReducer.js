import {
  GET_MOVIE_DETAIL,
  ERROR_DATA,
  IS_LOADING_DATA,
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
  GET_ADDED_MOVIE_TO_MY_LIST,
  GET_ALL_MY_LIST,
} from "../";

const initialState = {
  movieDetail: [],
  detail_loading: false,
  error: [],
  isLoading: false,
  isLoaded: false,
  addToMyList: [],
  movieAddedToMyList: [],
  allMyList: [],
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
    case ADD_TO_MY_LIST:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        addToMyList: payload,
        movieAddedToMyList: true,
      };
    case REMOVE_FROM_MY_LIST:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        addToMyList: payload,
      };
    case ERROR_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: payload,
      };
    case GET_ADDED_MOVIE_TO_MY_LIST: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        movieAddedToMyList: payload,
      };
    }
    case GET_ALL_MY_LIST:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        allMyList: payload,
      };
    default:
      return state;
  }
};
