import { PLAY_VIDEO, ERROR_DATA } from "../index";
import axios from "axios";
import actions from "./actions";
export const playVideo = (videoId) => async (dispatch) => {
  try {
    const  results  = await axios.get(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=fe1c0a7a68a0838ab8acba2444b20a72&language=en-US`
    );
    dispatch(actions(PLAY_VIDEO, results.data));
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
