import {LOGIN, LOGOUT, SIGNUP} from "../actions/session_actions";
import {signup, login, logout} from "../util/session_api_util";
import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, receiveCurrentUser, receiveErrors, logoutUser} from "../actions/session_actions";

//middleware gets a store object
const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));
  const successLogout = () => dispatch(logoutUser());
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
    default:
      return next(action);
  }
};

export default SessionMiddleware;
