import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import genresReducer from "./genresReducer";
import latestReducer from "./latestReducer";
import toprateReducer from "./toprateReducer";
import popularReducer from "./popularReducer";
import tvseriesReducer from "./tvseriesReducer";
import detailReducer from "./detailReducer";
import authReducer from "./authReducer";
import filmReducer from "./filmReducer";
import searchReducer from "./searchReducer";
import playReducer from "./playReducer";
export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  latest: latestReducer,
  toprate: toprateReducer,
  popular: popularReducer,
  tvseries: tvseriesReducer,
  details: detailReducer,
  login: authReducer,
  film: filmReducer,
  search: searchReducer,
  play: playReducer,
});
