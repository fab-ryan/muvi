import axios from "axios";
import {
  GET_MOVIE_DETAIL,
  IS_LOADING_DATA,
  ERROR_DATA,
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
  GET_ADDED_MOVIE_TO_MY_LIST,
  GET_ALL_MY_LIST,
} from "../";
import firebase from "../../utils/config";
const firestore = firebase.firestore();
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
export const addMyList = (payload) => (dispatch) => {
  try {
    firestore
      .collection("myList")
      .add(payload)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        dispatch(actions(ADD_TO_MY_LIST, docRef.id));
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        dispatch(actions(ERROR_DATA, error.message));
      });
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
export const removeToMyList = (movieId) => (dispatch) => {
  try {
    firestore
      .collection("myList")
      .where("movieId", "==", movieId)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
          dispatch(actions(GET_ADDED_MOVIE_TO_MY_LIST, false));
        });
      });
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
export const MovieDetailAdded = (movieId, userId) => (dispatch) => {
  try {
    firestore
      .collection("myList")
      .where("movieId", "==", movieId)
      .where("userId", "==", userId)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        if (querySnapshot.empty) {
          dispatch(actions(GET_ADDED_MOVIE_TO_MY_LIST, false));
        } else {
          dispatch(actions(GET_ADDED_MOVIE_TO_MY_LIST, true));
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        dispatch(actions(GET_ADDED_MOVIE_TO_MY_LIST, ""));
      });
  } catch (error) {
    dispatch(actions(ERROR_DATA, error.message));
  }
};
export const getAllMyList = (userId) => async (dispatch) => {
  try {
    firestore
      .collection("myList")
      .where("userId", "==", userId)
      .get()
      .then((querySnapshot) => {
        const myList = [];

        querySnapshot.forEach((doc) => {
          const { userId, movieDetail } = doc.data();
          myList.push({ id: doc.id, movieDetail, userId });
        });
        dispatch(actions(GET_ALL_MY_LIST, myList));
      })
      .catch((error) => {
        dispatch(actions(ERROR_DATA, error.message));
      });
  } catch (error) {
    dispatch(actions(ERROR_DATA, error));
  }
};
