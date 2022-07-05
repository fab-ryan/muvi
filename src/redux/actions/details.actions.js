import axios from "axios";
import { GET_MOVIE_DETAIL, IS_LOADING_DATA, ERROR_DATA } from "../";
import actions from "./actions";
export const getSingleMovies = (id) => (dispatch) => {
  dispatch({
    type: IS_LOADING_DATA,
  });

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fe1c0a7a68a0838ab8acba2444b20a72`
    )
    .then((responseData) => {
      const { data } = responseData;
      dispatch(actions(GET_MOVIE_DETAIL, data));
    })
    .catch((error) => {
      dispatch({
        type: ERROR_DATA,
        payload: error.message,
      });
    });
};
