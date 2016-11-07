import {LOGIN, LOGOUT, SIGNUP, UPDATE, NEW_SONG, DELETE_SONG} from "../actions/session_actions";
import {signup, update, login, logout, newSong, deleteSong} from "../util/session_api_util";
import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, receiveCurrentUser, receiveErrors, logoutUser,
        receiveNewSong, receiveSongErrors, receiveDelete, receiveDeleteErrors} from "../actions/session_actions";

//middleware gets a store object
const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = errors => {dispatch(receiveErrors(errors.responseJSON))};
  const successLogout = () => dispatch(logoutUser());
  const successCreateSong = song => {dispatch(receiveNewSong(song))}
  const errorSongCallback = errors => {dispatch(receiveSongErrors(errors.responseJSON))}
  const successDelete = (song) => dispatch(receiveDelete(song))
  switch(action.type) {
    case LOGIN:
      login(action.artist, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(successLogout);
      return next(action);
    case SIGNUP:
      signup(action.artist, successCallback, errorCallback);
      return next(action);
    case UPDATE:
      update(action.artist, successCallback, errorCallback);
      return next(action);
    case NEW_SONG:
      newSong(action.song, successCreateSong, errorSongCallback);
      return next(action);
    case DELETE_SONG:
      deleteSong(action.song, successDelete);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
