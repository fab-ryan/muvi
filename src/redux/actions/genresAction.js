import { IS_LOADING_DATA, GET_ALL_GENRES_MOVIES, ERROR_DATA } from "../";
import actions from "./actions";
import axios from "axios";

export const getAllGenresMovies = () => async (dispatch) => {
  try {
    dispatch(actions(IS_LOADING_DATA));
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=fe1c0a7a68a0838ab8acba2444b20a72&language=en-US"
    );

    if (data) {
      dispatch(actions(GET_ALL_GENRES_MOVIES, data));
    }
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
