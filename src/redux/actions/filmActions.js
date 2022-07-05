import { IS_LOADING_DATA, GET_ALL_FILM, ERROR_DATA } from "../";
import actions from "./actions";
import axios from "axios";

export const getAllFilm = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=fe1c0a7a68a0838ab8acba2444b20a72&language=en-US&page=1"
    );
    if (data) {
      dispatch(actions(GET_ALL_FILM, data));
    } else dispatch(actions(IS_LOADING_DATA));
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
