import { PLAY_VIDEO } from "../";
// reducer for play video
const initialState = {
  playing: false,
  video: [],
};
export  default  (state = initialState, action) => {
  switch (action.type) {
    case PLAY_VIDEO:
      return {
        ...state,
        video: action.payload,
      };
    default:
      return state;
  }
};
