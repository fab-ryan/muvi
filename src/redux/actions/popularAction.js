import {
  IS_LOADING_DATA,
  GET_ALL_POPULAR_MOVIES,
  ERROR_DATA,
  GET_ALL_POPULAR_SERIES,
} from "../";
import actions from "./actions";
import axios from "axios";

export const getAllPopularMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=fe1c0a7a68a0838ab8acba2444b20a72&language=en-US&page=1"
    );
    if (data) {
      dispatch(actions(GET_ALL_POPULAR_MOVIES, data));
    } else dispatch(actions(IS_LOADING_DATA));
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
export const getAllPopularSeries = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=fe1c0a7a68a0838ab8acba2444b20a72&language=en-US&page=1"
    );
    console.log(data);
    if (data) {
      dispatch(actions(GET_ALL_POPULAR_SERIES, data));
    } else dispatch(actions(IS_LOADING_DATA));
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
