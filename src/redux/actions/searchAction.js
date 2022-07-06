import {
  SEARCH_ALL_RESULTS,
  SEARCH_ALL_MOVIES,
  ERROR_DATA,
  SEARCH_ALL_SERIES,
  IS_LOADING_DATA,
} from "../";
import actions from "./actions";
import axios from "axios";
const key = "fe1c0a7a68a0838ab8acba2444b20a72";
export const getSearchAllResults = (search) => async (dispatch) => {
  try {
    dispatch(actions(IS_LOADING_DATA));
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${search}&page=1&include_adult=false`
    );
    dispatch(actions(SEARCH_ALL_RESULTS, data));
  } catch (error) {
    dispatch(actions(ERROR_DATA, error));
  }
};
export const getSearchAllMovies = (search) => async (dispatch) => {
  try {
    dispatch(actions(IS_LOADING_DATA));
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${search}&page=1&include_adult=false`
    );
    dispatch(actions(SEARCH_ALL_MOVIES, data));
  } catch (error) {
    dispatch(actions(ERROR_DATA, error));
  }
};
export const getSearchAllSeries = (search) => async (dispatch) => {
  try {
    dispatch(actions(IS_LOADING_DATA));
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&page=1&query=${search}&include_adult=false`
    );
    dispatch(actions(SEARCH_ALL_SERIES, data));
  } catch (error) {
    dispatch(actions(ERROR_DATA, error));
  }
};
