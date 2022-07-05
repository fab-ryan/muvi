import {
  GET_ALL_NOW_PLAYING_MOVIE,
  ERROR_DATA,
  IS_LOADED_DATA,
  IS_LOADING_DATA,
} from "../";
import axios from "axios";
import actions from "./actions";
const key = "fe1c0a7a68a0838ab8acba2444b20a72";
export const getAllMovies = () => async (dispatch) => {
  try {
    dispatch(actions(IS_LOADING_DATA));
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`
    );
    console.log(data);
    dispatch(actions(GET_ALL_NOW_PLAYING_MOVIE, data.results));
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
