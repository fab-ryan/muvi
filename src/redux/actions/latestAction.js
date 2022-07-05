import {
  IS_LOADING_DATA,
  GET_ALL_LATEST_MOVIES_TV_SERIES,
  ERROR_DATA,
} from "../";
import actions from "./actions";
import axios from "axios";

export const getAllLatestMoviesTvSeries = () => async (dispatch) => {
  try {
    dispatch(actions(IS_LOADING_DATA));
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/week?api_key=fe1c0a7a68a0838ab8acba2444b20a72"
    );

    if (data) {
      dispatch(actions(GET_ALL_LATEST_MOVIES_TV_SERIES, data));
    }
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
